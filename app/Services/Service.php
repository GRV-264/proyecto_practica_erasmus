<?php

namespace App\Services;

class Service
{
    // ---------------------------------------------------------------- //
    // ------------------------ Validations --------------------------- //
    // ---------------------------------------------------------------- //

    //  ---------  // Validate that the field is not empty // -------- //
    function isNotEmpty($value)
    {
        return !empty($value);
    }

    //  -------------------  // Validate email // -------------------- //
    function isValidEmail($value)
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
    }

    // -- Validate that letters and spaces between letters are used -- //
    function allowedCharacters($value)
    {
        return preg_match('/^[A-Za-z]+(?:\s[A-Za-z]+)*$/', $value);
    }

    //  ----------  // Format validation (capitalization) // --------- //
    function validateFormat($value)
    {
        return $value === ucwords($value);
    }

    //  -------------  // Validate special characters // ------------- //
    // (ENT_QUOTES - Will convert single and double quotes) //
    function htmlspecialcharsCheck($value)
    {
        return htmlspecialchars($value, ENT_QUOTES, 'UTF-8') === $value;
    }

    
}
