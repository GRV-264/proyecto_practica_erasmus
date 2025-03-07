<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ContacService;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class ContacController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function contac(Request $request)
    {
        try {
            $data = $request->all();
            $service = new ContacService();

            $nome = isset($data["nome"]) && !empty($data["nome"]);
            $cognome = isset($data["cognome"]) && !empty($data["cognome"]);
            $email = isset($data["email"]) && !empty($data["email"]);
            $messaggio = isset($data["messaggio"]) && !empty($data["messaggio"]);

            // Email Field, Nome Field, Cognome Field, Messagio Field
            if ($nome == true && $cognome == true && $email == true && $messaggio == true) {

                $name = trim($data["nome"]);
                $last_name = trim($data["cognome"]);
                $email = trim($data["email"]);
                $message = trim($data["messaggio"]);

                // Validate Form
                $es_valido = $service->validarFormulario($name, $last_name, $email, $message);

                if ($es_valido !== false) {

                    // Database
                    $resultado = $service->contacs($name, $last_name, $email, $message);

                    if ($resultado !== false) {

                        // Correct Message
                        session()->flash('success', "Il documento è stato inviato all'email indicata.");
                        return response()->json("The action was performed successfully.");
                    } else {

                        // Error Message
                        session()->flash('error', "Impossibile inviare con successo.");
                        return response()->json('Could not send successfully.');
                    }
                } else {
                    // Error Message
                    session()->flash('error', "Hai inserito un campo in modo errato e non è stato possibile inviarlo.");
                    return response()->json("You entered a field incorrectly and it could not be sent.");
                }
            } else {
                // Error Message
                session()->flash('error', "Si prega di indicare una email.");
                return response()->json("Please indicate your email.");
            }
        } catch (\Exception $e) {

            // Error Message  
            session()->flash('error', "Impossibile eseguire questa azione, ci scusiamo per il disagio.");
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
