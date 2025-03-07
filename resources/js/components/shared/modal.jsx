import React, { useState } from 'react';
import '../../../css/shared/modal.css';
import { sendDataEmail, validateField } from '../../api.js';

function Modal({ open, closeModal }) {

    /* ------------------------------- Modal  ---------------------------------- */
    // We pass the Open variable and the function closeModal through parameters //

    // --- State Variable Email --- //
    const [email, setEmail] = useState('');
    // --- State Variable Email Error --- //
    const [emailError, setEmailError] = useState('');

    // Feature to handle changes in email field
    const handleEmailChange = (event) => {
        // Value entered by the user
        const { value } = event.target;
        // Email Validation
        const errorMessage = validateField('email', value);

        // Set Email
        setEmail(value);
        // Set Error
        setEmailError(errorMessage);
    };

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (emailError === '') {

            // Send the email only if it is valid
            sendDataEmail(email);
            // Close modal //
            closeModal();
            // Refresh the page
            window.location.reload(true);
        }
    };

    return (

        <div className={`modal_bg fade ${open ? 'show' : ''}`} id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
            {/* We check that the variable is true, if so, we show the Modal */}

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal_content">

                    <div className="modal-header">

                        {/* --- Image --- */}
                        <picture>

                            {/* Image SVG */}
                            <source
                                srcSet="img/section-download/frame-222-modal.svg"
                                className="img-fluid"
                                type="image/svg"
                                alt='Image'
                            />

                            {/* Image WEBP */}
                            <source
                                srcSet="img/section-download/frame-222-modal.webp"
                                className="img-fluid"
                                type="image/webp"
                                alt='Image'
                            />

                            {/* Image JPG */}
                            <source
                                srcSet="img/section-download/frame-222-modal.jpg"
                                className="img-fluid"
                                type="image/jpg"
                                alt='Image'
                            />

                            {/* Image PNG */}
                            <img
                                src='img/section-download/frame-222-modal.png'
                                className="img-fluid"
                                type="image/png"
                                alt='Image'
                            />

                        </picture>

                        {/* --- Close Modal --- */}
                        <button type="button" className="btn-close custom-close-button" aria-label="Close" onClick={closeModal}></button>

                    </div>

                    {/* --- Modal Message --- */}
                    <div className="modal-body" id='modal_msg'>

                        {/* --- Modal Title --- */}
                        <h5 className="modal-title modal_title" id="modal_title">
                            Come massimizzare i benefici dell&rsquo;utilizzo dei codici univoci di prodotto
                        </h5>

                        <span className='secondary-text-message-modal'>
                            Inserisci il tuo indirizzo email per scaricare il nostro Ebook Gratuito e ottenere
                            immediatamente accesso a contenuti informativi e coinvolgenti.
                        </span>

                        <div className='modal_email'>
                            <label htmlFor="email" className="form-label label-text-form">Email</label>
                            <input type="email" id="email" name="email" value={email}
                                className={`form-control input_email input-form ${emailError ? 'is-invalid' : ''}`}
                                placeholder="mariorossi@gmail.com" onChange={handleEmailChange}
                            />

                            {/* Show message below email input field */}
                            <div className="invalid-feedback custom-error-download">
                                {emailError ? emailError : ''}
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer modal_footer">

                        {/* --- Send button --- */}
                        <button type="submit" className="btn btn-dark custom_btn" id='send' onClick={handleFormSubmit}>Scarica ora</button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;