<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Repositories\ContacRepository;


class ContacService extends Service
{

    // ---------------------------------------------------------------- //
    // --------------------- Create Contac Log ------------------------ //
    // ---------------------------------------------------------------- //
    public function contacs($name, $last_name, $email, $message)
    {

        try {

            // Database //
            // File with the actions in the database //
            $db_contac = new ContacRepository();

            $data = [
                'name' => $name,
                'last_name' => $last_name,
                'email' => $email,
                'message' => $message
            ];

            // Create record in database
            $db_contac->create($data);
            
        } catch (\Exception $e) {

            return false;
        }
    }

    // ---------------------------------------------------------------- //
    // ----------------------- Validate Form -------------------------- //
    // ---------------------------------------------------------------- //

    function validarFormulario($name, $last_name, $email, $message)
    {

        try {

            if (
                $this->isNotEmpty($name) && $this->isNotEmpty($last_name)
                && $this->isNotEmpty($email) && $this->isNotEmpty($message)
            ) {

                if (
                    $this->htmlspecialcharsCheck($name) && $this->htmlspecialcharsCheck($last_name)
                    && $this->htmlspecialcharsCheck($email) && $this->htmlspecialcharsCheck($message)
                ) {

                    if (
                        $this->allowedCharacters($name) && $this->validateFormat($name)
                        && $this->allowedCharacters($last_name) && $this->validateFormat($last_name)
                    ) {

                        if (
                            $this->isValidEmail($email)
                        ) {
                            // All validations passed
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (\Exception $e) {

            return false;
        }
    }
}
