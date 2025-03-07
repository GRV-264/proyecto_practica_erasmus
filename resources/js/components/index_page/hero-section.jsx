import React from 'react';
import '../../../css/index_page/hero-section.css';

function Hero_Section() {
    return (

        <section>

            {/* ----------------------- Hero Section  ---------------------- */}

            <div className="card">

                {/* --------------------------- Image --------------------------- */}
                {/* --- First Image --- */}
                <picture className='first-img'>

                    {/* Image WEBP */}
                    <source
                        srcSet="img/hero-section/graphics.webp 1x, 
                            img/hero-section/graphics@2x.webp 2x, 
                            img/hero-section/graphics@3x.webp 3x"
                        className="graphics"
                        type="image/webp"
                        alt='Image'
                    />

                    {/* Image JPG */}
                    <source
                        srcSet="img/hero-section/graphics.jpg 1x, 
                            img/hero-section/graphics@2x.jpg 2x, 
                            img/hero-section/graphics@3x.jpg 3x"
                        className="graphics"
                        type="image/jpg"
                        alt='Image'
                    />

                    {/* Image PNG */}
                    <source
                        srcSet="img/hero-section/graphics@2x.png 2x, 
                            img/hero-section/graphics@3x.png 3x"
                        className="graphics"
                        type="image/png"
                        alt='Image'
                    />

                    <img
                        src='img/hero-section/graphics.png'
                        className="graphics"
                        type="image/png"
                        alt='Image'
                    />
                </picture>

                {/* --- Second Image --- */}
                <picture className='second-img'>

                    {/* Image WEBP */}
                    <source
                        srcSet="img/hero-section/graphics-movil.webp"
                        className="graphics"
                        type="image/webp"
                        alt='Image'
                    />

                    {/* Image JPG */}
                    <source
                        srcSet="img/hero-section/graphics-movil.jpg"
                        className="graphics"
                        type="image/jpg"
                        alt='Image'
                    />

                    {/* Image PNG */}
                    <img
                        src='img/hero-section/graphics-movil.png'
                        className="graphics"
                        type="image/png"
                        alt='Image'
                    />
                </picture>


                {/* --------------------------- Image Text --------------------------- */}
                <div className="card-body d-flex flex-column justify-content-center align-items-center hero-section-text">

                    <h5 className="card-title text-center hero-section-headline">Ogni prodotto, un&rsquo;esperienza unica.</h5>
                    <br/>
                    <p className="card-text text-center hero-section-paragraph">
                        Con Code On Pack, introdurremo nei tuoi prodotti un codice univoco,<br />
                        un passaporto digitale segreto che rivoluzionerà la tua connessione con i consumatori.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Hero_Section;
