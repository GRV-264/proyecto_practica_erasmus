// ---------------------------------------------------------------------------------- //
// ------------------------------ // TOKEN // --------------------------------------- //

const token = document.head.querySelector('meta[name="csrf-token"]').content;

// ---------------------------------------------------------------------------------- //
// ------------------------------ // POST // --------------------------------------- //

const sendDataToBackend = async (url, data) => {
    const BaseUrl = 'http://127.0.0.1:8000' + url;

    try {
        const response = await fetch(BaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error al enviar la solicitud: ${response.statusText}`);
        }

        const responseData = await response.json();
        // Server response
        console.log(responseData);

    } catch (error) {
        console.error('Error al enviar la solicitud:', error.message);
    }
};

// ---------------------------------------------------------------------------------- //
// ----------------------------------- DOWNLOAD ------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const sendDataEmail = async (email_modal) => {
    const url = '/download';
    const email_user = email_modal;

    const data = {
        email: email_user
    };

    try {
        const response = await sendDataToBackend(url, data);
        console.log('Respuesta de la API:', response);

    } catch (error) {
        console.error('Error al enviar datos:', error.message);
        console.log('Detalles del error:', error);
    }

};

// ---------------------------------------------------------------------------------- //
// ------------------------------------ CONTAC -------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const sendDataForm = async (data_form) => {
    const url = '/contac';
    const { nome, cognome, email, messaggio } = data_form;

    const data = {
        nome,
        cognome,
        email,
        messaggio,
    };

    try {
        const response = await sendDataToBackend(url, data);
        console.log('Respuesta de la API:', response);

    } catch (error) {
        console.error('Error al enviar datos:', error.message);
        console.log('Detalles del error:', error);
    }

};

// ---------------------------------------------------------------------------------- //
// -------------------------------- FLASH MESSAGES ---------------------------------- //
// ---------------------------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', function () {
    const alertMessages = document.querySelectorAll('.alert');

    alertMessages.forEach(alertMessage => {
        setTimeout(function () {
            // Hide up
            alertMessage.style.top = '-100px';
        }, 5000); // 5000 milliseconds (5 seconds)
    });
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------- VALIDATIONS ----------------------------------- //
// ---------------------------------------------------------------------------------- //

// Function to validate that a field contains only text and spaces between letters
export const allowedCharacters = (value) => {
    return  /^[A-Za-z]+(?:\s[A-Za-z]+)*$/u.test(value);
};

// Function to validate an email address
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate that a field is not empty
export const isNotEmpty = (value) => {
    return value.trim() !== '';
};

// Function to escape special characters
export const htmlspecialchars = (value) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
    };

    return value.replace(/[&<>"'/\\]/g, (match) => map[match]);
};

// Function to check the format (capitalization)
export const  validateFormat = (value) => {
    return value === value.replace(/\b\w/g, l => l.toUpperCase());
}

// ---------------------------------------------------------------------------------- //
// ----------------------------- VALIDATE FORM CONTAC ------------------------------- //
// ---------------------------------------------------------------------------------- //

// Define validation rules for each form field
export const reglasValidacion = {
    nome: [
        {
            condition: isNotEmpty,
            message: 'Il campo non può essere vuoto',
        },
        {
            condition: htmlspecialchars,
            message: 'Il campo non deve contenere caratteri di spazio',
        },
        {
            condition: (value) => value.length >= 1,
            message: 'Il campo deve essere lungo almeno 1 carattere',
        },
        {
            condition: allowedCharacters,
            message: 'Il campo deve contenere solo testo',
        },
        {
            condition: validateFormat,
            message: 'Il campo deve contenere un formato adatto, prima lettera maiuscola e il resto minuscolo',
        },
    ],
    cognome: [
        {
            condition: isNotEmpty,
            message: 'Il campo non può essere vuoto',
        },
        {
            condition: htmlspecialchars,
            message: 'Il campo non deve contenere caratteri di spazio',
        },
        {
            condition: (value) => value.length >= 1,
            message: 'Il campo deve essere lungo almeno 1 carattere',
        },
        {
            condition: allowedCharacters,
            message: 'Il campo deve contenere solo testo',
        },
        {
            condition: validateFormat,
            message: 'Il campo deve contenere un formato adatto, prima lettera maiuscola e il resto minuscolo',
        },
    ],
    email: [
        {
            condition: isNotEmpty,
            message: 'Il campo non può essere vuoto',
        },
        {
            condition: htmlspecialchars,
            message: 'Il campo non deve contenere caratteri di spazio',
        },
        {
            condition: isValidEmail,
            message: 'Inserisci un indirizzo email valido',
        },
    ],
    messaggio: [
        {
            condition: isNotEmpty,
            message: 'Il campo non può essere vuoto',
        },
        {
            condition: htmlspecialchars,
            message: 'Il campo non deve contenere caratteri di spazio',
        },
    ],
};

// Function to validate a specific field based on validation rules
export const validateField = (name, value) => {
    const conjuntoReglas = reglasValidacion[name];

    if (!conjuntoReglas) {
        console.error(`Nombre no reconocido: ${name}`);
        return '';
    }

    for (const condition of conjuntoReglas) {
        if (!condition.condition(value)) {
            return condition.message;
        }
    }

    return '';
};