import React from 'react';
import '../../../css/index_page/image-section.css';

function Image_Section() {
    return (

        <section>
            {/* ----------------------- Image Section  ---------------------- */}

            {/* --- First Image --- */}
            <picture className='first-img'>
                {/* Image WEBP */}
                <source
                    srcSet="img/image-section/image-section.webp 1x, 
                        img/image-section/image-section@2x.webp 2x, 
                        img/image-section/image-section@3x.webp 3x"
                    className="img-fluid w-100"
                    type="image/webp"
                    alt='Image'
                />

                {/* Image JPG */}
                <source
                    srcSet="img/image-section/image-section.jpg 1x, 
                        img/image-section/image-section@2x.jpg 2x, 
                        img/image-section/image-section@3x.jpg 3x"
                    className="img-fluid w-100"
                    type="image/jpg"
                    alt='Image'
                />

                {/* Image PNG */}
                <source
                    srcSet="img/image-section/image-section@2x.png 2x, 
                        img/image-section/image-section@3x.png 3x"
                    className="img-fluid w-100"
                    type="image/png"
                    alt='Image'
                />

                <img
                    src='img/image-section/image-section.png'
                    className="img-fluid w-100"
                    type="image/png"
                    alt='Image'
                />

            </picture>

            {/* --- Second Image --- */}
            <picture className='second-img'>
                {/* Image WEBP */}
                <source
                    srcSet="img/image-section/image-movil-section.webp"
                    className="img-fluid w-100"
                    type="image/webp"
                    alt='Image'
                />

                {/* Image JPG */}
                <source
                    srcSet="img/image-section/image-movil-section.jpg"
                    className="img-fluid w-100"
                    type="image/jpg"
                    alt='Image'
                />

                {/* Image PNG */}
                <img
                    src='img/image-section/image-movil-section.png'
                    className="img-fluid w-100"
                    type="image/png"
                    alt='Image'
                />

            </picture>
        </section>

    );
}

export default Image_Section;