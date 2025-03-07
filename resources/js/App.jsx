import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { 
    Header, Footer, Hero_Section, Company_Section,
    Download_Section, Product_Section, Image_Section,
    Banner_Section, Form_Section
} from './components/index';

const App = () => {
    return (
        <div>
            <Header/>

            <Hero_Section/>
            <Company_Section/>
            <Download_Section/>
            <Product_Section/>
            <Image_Section/>
            <Banner_Section/>
            <Form_Section/>
            
            <Footer/>
        </div>
    )
}

export default App

if (document.getElementById('root')) {
    const Index = createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}