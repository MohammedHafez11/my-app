import React from 'react';
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';
const Javascript = () => {
    return (
        <>
<Helmet>
        <title>JavaScript Page</title>
        <meta name="description" content="javascript"/>
        
        
</Helmet>
<Header />
    
<MainContent pageName="JavaScript page" designer="sayed" />
    
    
<Footer />
      </>
    );
}

export default Javascript;