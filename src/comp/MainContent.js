import React from 'react';

const MainContent = ({pageName, designer}) => {
    return (
        <main>

            {pageName}

            <br />

            design by {designer}
           
        </main>
    );
}

export default MainContent;
