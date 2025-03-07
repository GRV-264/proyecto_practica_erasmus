import React from 'react';
import '../../../css/index_page/product-section.css';

function Product_Section() {
    return (

        <section className='section-product'>

            {/* ----------------------- Product Section  ---------------------- */}

            {/* ----------------- Title ------------------- */}
            <div className='row'>
                <span className="secondary-headline-product">
                    Dai processi, alla
                    <span className="text-style-1-product">relazione</span>
                    con <br /> il consumatore
                </span>
            </div>

            {/* --------------- Section One --------------- */}
            <div className="row container-product-one-block">

                {/* --- Section One Image --- */}
                <div className='col img-pr'>
                    <picture>

                        {/* Image WEBP */}
                        <source
                            srcSet="img/section-product/frame-1707478239.webp 1x, 
                                img/section-product/frame-1707478239@2x.webp 2x, 
                                img/section-product/frame-1707478239@3x.webp 3x"
                                className="img-fluid"
                            type="image/webp"
                            alt='Image'
                        />

                        {/* Image SVG */}
                        <source
                            srcSet="img/section-product/frame-1707478239.svg"
                            className="img-fluid"
                            type="image/svg"
                            alt='Image'
                        />

                        {/* Image PNG */}
                        <source
                            srcSet="img/section-product/frame-1707478239@2x.png 2x, 
                            img/section-product/frame-1707478239@3x.png 3x"
                            className="img-fluid"
                            alt='Image'
                            type="image/png"
                        />

                        <img
                            src='img/section-product/frame-1707478240.png'
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                    </picture>
                </div>

                {/* --- Section One Text --- */}
                <div className='col'>
                    <div className='section-text-product'>

                        <p className='p-product'>
                            GENERAZIONE
                        </p>

                        <span className="secondary-headline-product-section">
                            Dai il benvenuto all&#8217;efficienza
                        </span>

                        <span className="paragraph-product">
                            Automaticamente generati da un sofisticato software informatico,
                            i codici sono stati appositamente concepiti per sfidare ogni tentativo
                            di deduzione. Non esistono algoritmi o regole che possano rivelarne la
                            formula, rendendoli completamente irripetibili.
                            Ogni prodotto, una storia: ogni confezione rivela un codice, ogni codice
                            un mondo di dettagli! EAN, GCAS, Brand, lotto e data, tutto in un codice unico!
                        </span>

                    </div>
                </div>
            </div>

            {/* -------------- Section Two ---------------- */}
            <div className="row container-product-two-block">

                {/* --- Section Two Text --- */}
                <div className='col'>
                    <div className='section-text-product'>

                        <p className='p-product'>
                            STAMPA
                        </p>

                        <span className="secondary-headline-product-section">
                            Dalla generazione alla stampa
                        </span>

                        <span className="paragraph-product">
                            I codici generati dal sistema vengono comunicati automaticamente ai fornitori
                            responsabili della stampa delle confezioni di prodotto per poi essere stampati
                            all&#8217;interno delle buste di prodotto.
                            Il consumatore finale dovrà fisicamente aprire la confezione per poter ottenere
                            il codice.
                        </span>

                    </div>
                </div>

                {/* --- Section Two Image --- */}
                <div className='col img-pl'>
                    <picture>

                        {/* Image WEBP */}
                        <source
                            srcSet="img/section-product/frame-1707478240.webp 1x, 
                                img/section-product/frame-1707478240@2x.webp 2x, 
                                img/section-product/frame-1707478240@3x.webp 3x"
                            className="img-fluid"
                            type="image/webp"
                            alt='Image'
                        />

                        {/* Image SVG */}
                        <source
                            srcSet="img/section-product/frame-1707478240.svg"
                            className="img-fluid"
                            type="image/svg"
                            alt='Image'
                        />

                        {/* Image PNG */}
                        <source
                            srcSet="img/section-product/frame-1707478240@2x.png 2x, 
                                img/section-product/frame-1707478240@3x.png 3x"
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                        <img
                            src='img/section-product/frame-1707478240.png'
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                    </picture>

                </div>
            </div>

            {/* -------------- Section Three -------------- */}
            <div className="row container-product-three-block">

                {/* --- Section Three Image --- */}
                <div className='col img-pr'>
                    <picture>

                        {/* Image WEBP */}
                        <source
                            srcSet="img/section-product/frame-1707478241.webp 1x, 
                                img/section-product/frame-1707478241@2x.webp 2x, 
                                img/section-product/frame-1707478241@3x.webp 3x"
                            className="img-fluid"
                            type="image/webp"
                            alt='Image'
                        />

                        {/* Image SVG */}
                        <source
                            srcSet="img/section-product/frame-1707478241.svg"
                            className="img-fluid"
                            type="image/svg"
                            alt='Image'
                        />

                        {/* Image PNG */}
                        <source
                            srcSet="img/section-product/frame-1707478241@2x.png 2x, 
                                img/section-product/frame-1707478241@3x.png 3x"
                            className="img-fluid"
                            alt='Image'
                            type="image/png"
                        />

                        <img
                            src='img/section-product/frame-1707478241.png'
                            className="img-fluid"
                            type="image/png"
                            alt='Image'
                        />

                    </picture>
                </div>

                {/* --- Section Three Text --- */}
                <div className='col'>
                    <div className='section-text-product'>

                        <p className='p-product'>
                            UTILIZZO
                        </p>

                        <span className="secondary-headline-product-section">
                            Strategie di marketing mirate
                        </span>

                        <span className="paragraph-product">
                            Invoglia i tuoi clienti con concorsi, cashback e promozioni esclusive. La prova d'acquisto è
                            solo un codice di distanza.
                            I codici univoci non sono solo strumenti interni per le aziende, ma offrono anche un vantaggio
                            per l'esperienza del cliente e il marketing.
                        </span>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Product_Section;