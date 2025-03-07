<?php

namespace App\Services;

use App\Mail\SendMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Repositories\DownloadRepository;

class DownloadService  extends Service
{
    // ---------------------------------------------------------------- //
    // --------------- Create Or Update Download Log ------------------ //
    // ---------------------------------------------------------------- //
    public function downloads($email_user)
    {

        try {

            // Database //
            // File with the actions in the database //
            $db = new DownloadRepository();

            // Transaction //
            // We pass the repository instance and the user's email //
            DB::transaction(function () use ($db, $email_user) {

                // If it is not found, it returns null
                $resultado = $db->getByEmail($email_user);

                if ($resultado !== null) {

                    // Update downloads
                    $db->update($email_user);
                } else {

                    // If the user does not exist, we create it
                    $create_user = [
                        'email' => $email_user,
                        'downloads' => 1,
                    ];

                    // Create record in database
                    $db->create($create_user);
                }
            });
        } catch (\Exception $e) {

            return false;
        }
    }

    // ---------------------------------------------------------------- //
    // ------------------ Send The Email To The User ------------------ //
    // ---------------------------------------------------------------- //

    function send_email($email_user)
    {
        try {

            // Send mail //
            Mail::to($email_user)->send(new SendMail());
        } catch (\Exception $e) {

            // If an error occurs while sending the email it 
            // returns an exception, we will return false to 
            // handle the error in the controller
            return false;
        }
    }

}
