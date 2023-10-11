import React from 'react';
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';
const Css = () => {
    return (
        <>
<Helmet>
        <title>Css Page</title>
        <meta name="description" content="css"/>
        
</Helmet>
<Header />
    
<MainContent pageName="Css page" designer="ahmed" />
    
    
<Footer />
      </>
    );
}

export default Css;