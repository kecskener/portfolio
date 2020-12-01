import React, { Component } from 'react';
import Card from './card/Card';
import logo from '../../assets/images/git.png';
import './projects.scss';

class Projects extends Component {
    render() {
        return (
            <div className={"projects"}>
                <div className={"projects--live"}>
                    <div className={"projects--live__title"}>Projektek:</div>
                    <div className={"projects--live__container"}>
                        <Card title={"Project 'LadyJ'"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis qui ab harum reiciendis perspiciatis in molestias dolorum officia suscipit similique eveniet dolore voluptatum consequatur vel recusandae excepturi, quidem cumque odit?"} website={"https://ladyj.cloudaccess.host"}/>
                        <Card title={"Project 'Calculator'"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis qui ab harum reiciendis perspiciatis in molestias dolorum officia suscipit similique eveniet dolore voluptatum consequatur vel recusandae excepturi, quidem cumque odit?"} website={"https://ladyj.cloudaccess.host"}/>
                    </div>
                </div>
                <div className={"projects--footer"}>
                    <h3 className={"projects--footer__copyright"}>Copyright Feigl Gergő 2020</h3>
                    <a href={"https://github.com/kecskener"} className={"projects--footer__link"}>
                        <img src={logo} alt={"Github logo"} className={"projects--footer__link--background"} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Projects;