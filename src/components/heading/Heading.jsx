import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import "./heading.scss";

const Heading = () => {

    return (
        <div className={"heading"}>
            <Header />
            <Main />
        </div>
    );
}

export default Heading;