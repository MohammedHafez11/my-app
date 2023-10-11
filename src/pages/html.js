import React from 'react';
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';
const Html = () => {
    return (
        <>
<Helmet>
        <title>Html Page</title>
        <meta name="description" content="html"/>
</Helmet>

<Header />
    
<MainContent pageName="Html page" designer="allaa" />
    
    
<Footer />
      </>
    );
}

export default Html;