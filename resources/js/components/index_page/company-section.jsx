import React from 'react';
import '../../../css/index_page/company-section.css';

function Company_Section() {
    return (

        <section>
            {/* ----------------------- Company Section  ---------------------- */}
            
            <div className="row mt-5 mb-5 pt-5 pb-5">
                <div className="col-12 col-md-4  px-5 mb-3">
                    <div className="text-image d-flex flex-column align-items-center text-center">

                        {/* --------------------------- Section One --------------------------- */}
                        <img
                            src="img/section-company/icon_1.svg"
                            className="icon-img"
                            alt='icon image'
                        />

                        <span className=" company-section-headline">
                            Identificazione e tracciabilità
                        </span>

                        <span className=" company-section-paragraph">
                            Ogni articolo avrà il suo codice univoco, migliorando la tracciabilità,
                            poiché ogni fase, dal processo di produzione alla consegna al consumatore,
                            può essere registrata e monitorata in tempo reale.
                        </span>

                    </div>
                </div>

                <div className="col-12 col-md-4  px-5 mb-3">
                    <div className="text-image d-flex flex-column align-items-center text-center">

                        {/* --------------------------- Section Two --------------------------- */}
                        <img
                            src="img/section-company/icon_2.svg"
                            className="icon-img"
                            alt='icon image'
                        />

                        <span className="  company-section-headline">
                            Efficienza operativa
                        </span>

                        <span className=" company-section-paragraph">
                            L'identificazione  dei prodotti consente di tenere traccia delle quantità,
                            delle scorte e dei movimenti con precisione. Questo porta a una riduzione
                            degli sprechi e dei costi legati a scorte e inventario e consente una gestione
                            più efficiente delle forniture.
                        </span>

                    </div>
                </div>

                <div className="col-12 col-md-4  px-5 mb-3">
                    <div className="text-image d-flex flex-column align-items-center text-center">

                        {/* --------------------------- Section Three --------------------------- */}
                        <img
                            src="img/section-company/icon_3.svg"
                            className="icon-img"
                            alt='icon image'
                        />

                        <span className=" company-section-headline">
                            Marketing mirato
                        </span>

                        <span className=" company-section-paragraph">
                            I codici possono essere utilizzati per creare connessioni con i clienti attraverso
                            promozioni mirate, concorsi esclusivi e offerte personalizzate basate sugli acquisti precedenti,
                            aprendo porte a strategie di marketing più mirate ed efficaci.
                        </span>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Company_Section;