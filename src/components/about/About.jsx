import React, { Component } from 'react';
import Container from './container/Container';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className={"about"}>
                <div className={"about--name"}>
                    <h1 className={"about--name__strong"}>Bemutatkozás:</h1>
                </div>
                <Container />
            </div>
        );
    }
}

export default About;