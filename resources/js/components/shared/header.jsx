import React, { useState, useEffect } from 'react';
import '../../../css/shared/header.css';

function Header() {

    // --- State Variable SubMenu --- //
    // show / hide //
    const [menuOpen, setMenuOpen] = useState(false);

    // --- State Variable Button --- //
    // show / hide //
    const [menuVisible, setMenuVisible] = useState(true);

    // --- State Variable Clase CSS --- //
    // If the submenu is displayed, apply said css //
    const claseCSS = menuOpen ? 'custom_nav' : '';

    const handleMenuClick = () => {
        // Checks if the menu is open or visible, 
        // if both are true, closes it
        if (menuOpen && menuVisible) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    };

    // Feature to check button visibility based on screen width //
    const checkButtonVisibility = () => {
        setMenuVisible(window.innerWidth <= 993);
    };

    useEffect(() => {
        // Checks button visibility when page loads or window size changes //
        checkButtonVisibility();
        window.addEventListener('resize', checkButtonVisibility);

        return () => {
            // Clear event //
            window.removeEventListener('resize', checkButtonVisibility);
        };
    }, []);

    return (

        <header>

            {/* ----------------------- Header Section  ---------------------- */}

            <nav className={`navbar navbar-light bg-light navbar-expand-lg ${claseCSS}`}>
                <div className="container-fluid mb-4 mt-4 me-5 ms-5 pe-5 ps-5 container-nav">
                    <a className="navbar-brand">

                        {/* --------------------------- Logo --------------------------- */}
                        <picture>

                            {/* Logo WEBP */}
                            <source
                                srcSet="img/header/group-27.webp 1x, 
                                    img/header/group-27_2x.webp 2x,
                                    img/header/group-27_3x.webp 3x"
                                type="image/webp"
                                alt='Image Logo'
                            />

                            {/* Logo SVG */}
                            <source
                                srcSet="img/header/group-27.svg"
                                type="image/svg"
                                alt='Image Logo'
                            />


                            {/* Logo PNG */}
                            <source
                                srcSet="img/header/group-27_2x.png 2x, 
                                    img/header/group-27_3x.png 3x"
                                alt='Image Logo'
                                type="image/png"
                            />

                            <img
                                src='img/header/group-27.png'
                                type="image/png"
                                alt='Image Logo'
                            />
                        </picture>

                    </a>

                    <button className="navbar-toggler collapsed custom-nav-button rounded-pill" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenuClick} id='buttonMenu'>

                        {/* If the menu is open */}
                        {menuOpen  ? (
                            
                            <span>
                                {/* Shows the close/cancel icon */}
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/multiply.png" alt="multiply"/>
                            </span>
                            
                        ): (
                            <span className="navbar-toggler-icon">{/* Shows the hamburger icon */}</span>
                        )}
                    </button>

                    {/* If the menu is open or the button is not visible */}
                    {(menuOpen || !menuVisible) && (
                        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                            onClick={handleMenuClick} id="navbarSupportedContent">

                            <div className="navbar-nav container-fluid mb-4 mt-4 me-5 ms-5 pe-0 ps-0 justify-content-end align-items-center expanded">

                                {/* --- Menu Item --- */}
                                <a className='nav-item menu-item' href='#'>
                                    <span className='nav-link menu-item-text pe-5'>Casi di successo</span>
                                </a>

                                {/* --- Menu Item --- */}
                                <a className='nav-item menu-item' href='#'>
                                    <span className='nav-link menu-item-text pe-5'>Contattaci</span>
                                </a>

                                {/* --- Menu Item --- */}
                                <a className='nav-item menu-button' href='#' role='button'>
                                    <span className='nav-link menu-button-text'>Richiedi una demo</span>
                                </a>

                            </div>
                        </div>
                    )}

                </div>
            </nav>

        </header>
    );
}

export default Header;


