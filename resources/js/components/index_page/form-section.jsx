import React, { useState, useEffect } from 'react';
import '../../../css/index_page/form-section.css';
import * as Formulario from '../../api.js';

function Form_Section() {

    // Define the status for the form data,
    // whether it is valid, and error messages

    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        messaggio: '',
    });

    const [isValid, setIsValid] = useState(true);

    const [errorMessages, setErrorMessages] = useState({
        nome: '',
        cognome: '',
        email: '',
        messaggio: '',
    });

    // Function to handle changes to form input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const errorMessage = Formulario.validateField(name, value);

        // Update form status, validity and error messages
        setFormData({
            ...formData,
            [name]: value,
        });

        // Set isValid to true if there are no errors
        setIsValid(errorMessage === '');

        // Update field-specific error messages
        setErrorMessages({
            ...errorMessages,
            [name]: errorMessage,
        });
    };

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        sendContact();
    };

    // Function to handle errors or send the contact
    const sendContact = async () => {
        const { nome, cognome, email, messaggio } = formData;

        // Vacuum error messages
        // In case no field is edited and the form is sent
        const newErrorMessages = {
            nome: Formulario.validateField('nome', nome),
            cognome: Formulario.validateField('cognome', cognome),
            email: Formulario.validateField('email', email),
            messaggio: Formulario.validateField('messaggio', messaggio),
        };

        // Check if any error message is not empty
        if (Object.values(newErrorMessages).some((message) => message !== '')) {

            // Show the error
            setErrorMessages(newErrorMessages);
            // It's not valid
            setIsValid(false);

        } else {
            
            // Send the data
            Formulario.sendDataForm(formData);
            // Refresh the page
            window.location.reload(true);
        }
    };

    // After handling the confirmation message, clean up the URL
    window.history.replaceState({}, document.title, window.location.pathname);

    return (
        <section className="section-form image-form">
            <div className='container pb-5 mb-5 pt-5 mt-5 container-form'>

                {/* ---------------- TEXT  --------------- */}
                <div className='row'>
                    <div className="col-md-6 mt-5 pt-5 container-text">
                        <p className="p-text-form mt-5 pt-5 custom-text">
                            Start building ideas
                        </p>
                        <h2 className="secondary-headline-form">
                            Curioso? Contattaci
                        </h2>
                    </div>

                    {/* ---------------- FORM ---------------- */}
                    <div className="col-md-6">
                        <form className="row g-3">
                            <div className="mb-3 col-md-6">

                                {/* ------------ NOME ------------ */}
                                <label className="label-text-form">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className={`form-control input-form ${errorMessages.nome ? 'is-invalid' : ''}`}
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    placeholder="Mario"
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* --- Error Message --- */}
                                <div className="invalid-feedback custom-error-form">
                                    {errorMessages.nome ? errorMessages.nome : ' '}
                                </div>

                            </div>
                            <div className="mb-3 col-md-6">

                                {/* ----------- COGNOME ---------- */}
                                <label className="label-text-form">
                                    Cognome
                                </label>
                                <input
                                    type="text"
                                    className={`form-control input-form ${errorMessages.cognome ? 'is-invalid' : ''}`}
                                    id="cognome"
                                    name="cognome"
                                    value={formData.cognome}
                                    placeholder="Rossi"
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* --- Error Message --- */}
                                <div className="invalid-feedback custom-error-form">
                                    {errorMessages.cognome ? errorMessages.cognome : ''}
                                </div>

                            </div>
                            <div className="mb-3">

                                {/* ------------ EMAIL ----------- */}
                                <label className="label-text-form">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`form-control input-form ${errorMessages.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="mariorossi@gmail.com"
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* --- Error Message --- */}
                                <div className="invalid-feedback custom-error-form">
                                    {errorMessages.email ? errorMessages.email : ''}
                                </div>

                            </div>
                            <div className="mb-3">

                                {/* ----------- MESSAGE ---------- */}
                                <label className="label-text-form">
                                    Messaggio
                                </label>
                                <textarea
                                    className={`form-control input-form ${errorMessages.messaggio ? 'is-invalid' : ''}`}
                                    id="messaggio"
                                    name="messaggio"
                                    rows="4"
                                    placeholder="Scrivi qui il tuo messaggio"
                                    value={formData.messaggio}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>

                                {/* --- Error Message --- */}
                                <div className="invalid-feedback custom-error-form">
                                    {errorMessages.messaggio ? errorMessages.messaggio : ''}
                                </div>


                            </div>
                            <div className="d-grid gap-2">

                                {/* ------------ BUTTON ---------- */}
                                <button
                                    type="submit"
                                    id='invia'
                                    className="btn btn-dark pt-3 pb-3 rounded-pill"
                                    onClick={handleFormSubmit}
                                >
                                    Invia
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form_Section;
