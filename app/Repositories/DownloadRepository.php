<?php

namespace App\Repositories;

use App\Models\Download;

class DownloadRepository
{
    // ------------------------------------------------------------- //
    // --------------------- Get all records ----------------------- //
    // ------------------------------------------------------------- //
    public function getAll()
    {
        return Download::all();
    }

    // ------------------------------------------------------------- //
    // ------------------- Get user by email ----------------------- //
    // ------------------------------------------------------------- //
    public function getByEmail($email)
    {
        return Download::where('email', $email)->first();
    }

    // ------------------------------------------------------------- //
    // ----------------------- Create record ----------------------- //
    // ------------------------------------------------------------- //
    public function create(array $data)
    {
        return Download::create($data);
    }

    // ------------------------------------------------------------- //
    // --------------- Update registration by email ---------------- //
    // ------------------------------------------------------------- //
    public function update($email)
    {
        // If the user exists, we increase the downloads by 1 //
        return Download::where('email', $email)->increment('downloads', 1);
    }

    // ------------------------------------------------------------- //
    // ----------------------- Delete record ----------------------- //
    // ------------------------------------------------------------- //
    public function delete($email)
    {
        return Download::where('email', $email)->delete();
    }
}
