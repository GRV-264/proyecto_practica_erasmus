import React, { useState, useEffect } from 'react';
import Modal from '../shared/modal.jsx';
import '../../../css/index_page/download-section.css';
import '../../api.js';

function Download_Section() {

    // --- State Variable Modal --- //
    const [open, setOpen] = useState(false);

    // Functions //
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    // If the modal is open
    if(open === true){
        // Disable scrolling on the body when the modal is displayed
        document.body.style.overflow = 'hidden';
    }else{
        // Reactivates scrolling on the body when the modal closes
        document.body.style.overflow = '';
    }

    return (
        <section>

            {/* ----------------------- Section Download ---------------------- */}

            <div className="row flex-column flex-md-row">
                <div className="col col-md-6">

                    {/* --- Image --- */}
                    <picture>

                        {/* Image WEBP */}
                        <source
                            srcSet="img/section-download/frame-222.webp 1x, 
                                img/section-download/frame-222@2x.webp 2x, 
                                img/section-download/frame-222@3x.webp 3x"
                            className="img-fluid"
                            type="image/webp"
                            alt='Image'
                        />

                        {/* Image JPG */}
                        <source
                            srcSet="img/section-download/frame-222.jpg 1x, 
                                img/section-download/frame-222@2x.jpg 2x, 
                                    img/section-download/frame-222@3x.jpg 3x"
                            className="img-fluid"
                            type="image/jpg"
                            alt='Image'
                        />

                        {/* Image PNG */}
                        <source
                            srcSet="img/section-download/frame-222@2x.png 2x, 
                                img/section-download/frame-222@3x.png 3x"
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                        <img
                            src='img/section-download/frame-222.png'
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                    </picture>
                </div>

                <div className="col col-md-6">

                    {/* --- Text --- */}
                    <div className="section-text-download">

                        <div className='top-download'>
                            <p className='p-download text-uppercase'>
                                guida gr<span className="text-style-1-download">atui</span>ta
                            </p>

                            <span className="secondary-headline-download">
                                Come massimizzare i benefici dell'utilizzo dei codici univoci di prodotto
                            </span>
                        </div>

                        <span className="paragraph-download">
                            Da una migliore gestione dell'inventario a strategie di marketing personalizzate,
                            i codici univoci possono rivoluzionare la tua azienda. Ecco una guida su come trarre
                            il massimo beneficio dall'adozione di questa tecnologia.
                        </span>

                        <div className="button-download">
                            <div className="text-container-download">

                                <span className="button-text-download" role='button' onClick={openModal}>
                                    Scarica la tua guida gratuita
                                </span>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                {/* --- Modal --- */}
                {open && (
                    <Modal open={open} closeModal={closeModal} />
                )}
            </div>

            {/* --------------------------- Image Gallery --------------------------- */}

            <div className="row-images-gallery-download">

                <div className="rectangle-download"></div>

                <img
                    src="img/section-download/frame-1707478236.svg"
                    className="img-download"
                    alt='Image'
                />

                <div className="rectangle-download"></div>

                <img
                    src="img/section-download/frame-1707478234.svg"
                    className='img-codeon'
                    alt='Image'
                />

            </div>
        </section>

    );
}

export default Download_Section;