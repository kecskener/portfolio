import React from 'react';
import './container.scss';

const Container = () => {
    return (
        <div className={"about--container"}>
            <div className={"about--container__card orange"}>
                <h1 className={"about--container__card--heading"}>Web-fejlesztés</h1>
                <h3 className={"about--container__card--subheading"}>Lorem ipsum dolor sit amet, consectetur a sed do adipiscing  elit, sed do eiusmod tempor incididun ut labore et dolore es magna aliqua.</h3>
            </div>
            <div className={"about--container__card blue"}>
                <h1 className={"about--container__card--heading"}>Programozás</h1>
                <h3 className={"about--container__card--subheading"}>Lorem ipsum dolor sit amet, consectetur a sed do adipiscing  elit, sed do eiusmod tempor incididun ut labore et dolore es magna aliqua.</h3>
            </div>
            <div className={"about--container__card red"}>
                <h1 className={"about--container__card--heading"}>Etikus hackelés</h1>
                <h3 className={"about--container__card--subheading"}>Lorem ipsum dolor sit amet, consectetur a sed do adipiscing  elit, sed do eiusmod tempor incididun ut labore et dolore es magna aliqua.</h3>
            </div>
        </div>
    );
}

export default Container;