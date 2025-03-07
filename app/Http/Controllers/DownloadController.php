<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\DownloadService;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class DownloadController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    public function download(Request $request)
    {
        try {
            $data = $request->all();
            $service = new DownloadService();
            $email = isset($data["email"]) && !empty($data["email"]);

            // Email Field
            if ($email == true) {

                $email_user = trim($data["email"]);

                // Validate Email
                $es_valido = $service->isValidEmail($email_user);

                if ($es_valido !== false) {

                    // Database
                    $resultado = $service->downloads($email_user);

                    if ($resultado !== false) {

                        $mail = $service->send_email($email_user);

                        // Send mail
                        if ($mail !== false) {

                            // Correct Message
                            session()->flash('success', "Il documento è stato inviato all'email indicata.");
                            return response()->json("The action was performed successfully.");
                        } else {

                            // Error Message
                            session()->flash('error', "Non è stato possibile inviare correttamente il file a questa email.");
                            return response()->json('Could not successfully send file to this email.');
                        }
                    } else {

                        // Error Message
                        session()->flash('error', "Impossibile inviare con successo.");
                        return response()->json('Could not send successfully.');
                    }
                } else {
                    // Error Message
                    session()->flash('error', "Hai scritto un'email non valida.");
                    return response()->json("You have entered an invalid email.");
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
