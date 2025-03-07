<?php

namespace App\Repositories;

use App\Models\Contac;

class ContacRepository
{
    // ------------------------------------------------------------- //
    // --------------------- Get all records ----------------------- //
    // ------------------------------------------------------------- //
    public function getAll()
    {
        return Contac::all();
    }

    // ------------------------------------------------------------- //
    // ------------------- Get user by email ----------------------- //
    // ------------------------------------------------------------- //
    public function getByEmail($email)
    {
        return Contac::where('email', $email)->first();
    }

    // ------------------------------------------------------------- //
    // ----------------------- Create record ----------------------- //
    // ------------------------------------------------------------- //
    public function create(array $data)
    {
        return Contac::create($data);
    }

    // ------------------------------------------------------------- //
    // --------------- Update registration by email ---------------- //
    // ------------------------------------------------------------- //
    public function update($email, array $data)
    {
        return Contac::where('email', $email)->update($data);
    }

    // ------------------------------------------------------------- //
    // ----------------------- Delete record ----------------------- //
    // ------------------------------------------------------------- //
    public function delete($email)
    {
        return Contac::where('email', $email)->delete();
    }
}