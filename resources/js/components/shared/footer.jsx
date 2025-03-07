import React from 'react';
import '../../../css/shared/footer.css';

function Footer() {
    return (

        <section>
            {/* ----------------------- Footer Section  ---------------------- */}

            <footer className='footer pt-5 pb-5'>
                <div className='me-5 ms-5 pe-5 ps-5 pt-5 mt-5 container-footer'>
                    <div className='row'>

                        <div className='col-md-6 col-lg-6 text-right custom-col-logo'>
                            {/* --- Image Logo --- */}
                            <picture>
                                {/* Logo WEBP */}
                                <source
                                    srcSet="img/footer/group-27.webp 1x, img/footer/group-27@2x.webp 2x, img/footer/group-27@3x.webp 3x"
                                    type="image/webp"
                                    alt='Image Logo'
                                />
                                {/* Logo SVG */}
                                <source
                                    srcSet="img/footer/group-27.svg"
                                    type="image/svg"
                                    alt='Image Logo'
                                />
                                {/* Logo PNG */}
                                <source
                                    srcSet="img/footer/group-27@2x.png 2x, img/footer/group-27@3x.png 3x"
                                    alt='Image Logo'
                                    type="image/png"
                                />
                                <img
                                    src='img/footer/group-27.png'
                                    type="image/png"
                                    className='img-fluid'
                                    alt='Image Logo'
                                />
                            </picture>
                        </div>


                        <div className='col-md-3 col-lg-2 col-md-push-3 custom-col'>
                            <span className="info-footer">DOVE SIAMO</span><br />
                            <div className="text-info-footer pt-4">
                                DeepCube s.r.l, <br />
                                Viale Gran Sasso, 1, <br />
                                Chieti, 66100 <br />
                            </div>
                        </div>

                        <div className='col-md-3 col-lg-2 col-md-push-3 custom-col'>
                            <span className="info-footer">CONTATTI</span><br />
                            <div className="text-info-footer pt-4">
                                info@deepcube.eu, <br />
                                0871407718
                            </div>
                        </div>

                        <div className='col-md-3 col-lg-2 col-md-push-3 custom-col'>
                            <span className="info-footer">SEGUICI SU</span>
                            <div className='pt-4'>
                                {/* Icon Youtube */}
                                <a href='#'>
                                    <picture>
                                        {/* Icon WEBP */}
                                        <source
                                            srcSet="img/footer/social/youtube.webp 1x, 
                                            img/footer/social/youtube@2x.webp 2x, 
                                            img/footer/social/youtube@3x.webp 3x"
                                            className="icon-footer"
                                            type="image/webp"
                                            alt='Icon Youtube'
                                        />
                                        {/* Icon SVG */}
                                        <source
                                            srcSet="img/footer/social/youtube.svg"
                                            className="icon-footer"
                                            type="image/svg"
                                            alt='Icon Youtube'
                                        />
                                        {/* Icon PNG */}
                                        <source
                                            srcSet="img/footer/social/youtube@2x.png 2x, 
                                            img/footer/social/youtube@3x.png 3x"
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Youtube'
                                        />
                                        <img
                                            src='img/footer/social/youtube.png'
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Youtube'
                                        />
                                    </picture>
                                </a>
                                {/* Icon Facebook */}
                                <a href='#'>
                                    <picture>
                                        {/* Icon WEBP */}
                                        <source
                                            srcSet="img/footer/social/facebook.webp 1x, 
                                            img/footer/social/facebook@2x.webp 2x, 
                                            img/footer/social/facebook@3x.webp 3x"
                                            className="icon-footer"
                                            type="image/webp"
                                            alt='Icon Facebook'
                                        />
                                        {/* Icon SVG */}
                                        <source
                                            srcSet="img/footer/social/facebook.svg"
                                            className="icon-footer"
                                            type="image/svg"
                                            alt='Icon Facebook'
                                        />
                                        {/* Icon PNG */}
                                        <source
                                            srcSet="img/footer/social/facebook@2x.png 2x, 
                                            img/footer/social/facebook@3x.png 3x"
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Facebook'
                                        />
                                        <img
                                            src='img/footer/social/facebook.png'
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Facebook'
                                        />
                                    </picture>
                                </a>
                                {/* Icon Instagram */}
                                <a href='#'>
                                    <picture>
                                        {/* Icon WEBP */}
                                        <source
                                            srcSet="img/footer/social/instagram.webp 1x, 
                                            img/footer/social/instagram@2x.webp 2x, 
                                            img/footer/social/instagram@3x.webp 3x"
                                            className="icon-footer"
                                            type="image/webp"
                                            alt='Icon Instagram'
                                        />
                                        {/* Icon SVG */}
                                        <source
                                            srcSet="img/footer/social/instagram.svg"
                                            className="icon-footer"
                                            type="image/svg"
                                            alt='Icon Instagram'
                                        />
                                        {/* Icon PNG */}
                                        <source
                                            srcSet="img/footer/social/instagram@2x.png 2x, 
                                            img/footer/social/instagram@3x.png 3x"
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Instagram'
                                        />
                                        <img
                                            src='img/footer/social/instagram.png'
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Instagram'
                                        />
                                    </picture>
                                </a>
                                {/* Icon Linkedin */}
                                <a href='#'>
                                    <picture>
                                        {/* Icon WEBP */}
                                        <source
                                            srcSet="img/footer/social/linkedin.webp 1x, 
                                            img/footer/social/linkedin@2x.webp 2x, 
                                            img/footer/social/linkedin@3x.webp 3x"
                                            className="icon-footer"
                                            type="image/webp"
                                            alt='Icon Linkedin'
                                        />
                                        {/* Icon SVG */}
                                        <source
                                            srcSet="img/footer/social/linkedin.svg"
                                            className="icon-footer"
                                            type="image/svg"
                                            alt='Icon Linkedin'
                                        />
                                        {/* Icon PNG */}
                                        <source
                                            srcSet="img/footer/social/linkedin@2x.png 2x, 
                                            img/footer/social/linkedin@3x.png 3x"
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Linkedin'
                                        />
                                        <img
                                            src='img/footer/social/linkedin.png'
                                            className="icon-footer"
                                            type="image/png"
                                            alt='Icon Linkedin'
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='row mt-5 pt-5 border-top border-secondary border-2'>

                        <div className='col-12 col-md-6'>
                            <span className="text-footer">
                                CodeOnPack © 2023. All rights reserved
                            </span>
                        </div>

                        <div className='col-12 col-md-2'>
                            <span className="text-footer">
                                Powered by DeepCube
                            </span>
                        </div>

                        <div className='col-12 col-md-2'>
                            <span className="text-footer">
                                Privacy & Policy
                            </span>
                        </div>

                        <div className='col-12 col-md-2'>
                            <span className="text-footer">
                                Terms & Condition
                            </span>
                        </div>

                    </div>

                </div>
            </footer>

        </section>

    );
}

export default Footer;