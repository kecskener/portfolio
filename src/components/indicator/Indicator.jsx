import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll';
import sprite from '../../assets/svg/sprite.svg';
import './indicator.scss';

class Indicator extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeClasses: [false, false, false]
        };
    }

    scrollToBottom(){
        scroll.scrollTo(1926);
    }
    
    scrollToTop(){
        scroll.scrollToTop();
    }

    scrollToAbout(){
        scroll.scrollTo(1000);
    }


    toggle(index) {
        const activeItem = [false, false, false];
        const activeClasses = [...activeItem.slice(0, index), !activeItem[index], activeItem.slice(index + 1)].flat();
        this.setState({ activeClasses });
    }


    render() {
        return (
            <div className={"indicator"}>
                <div className={"indicator--item"}>
                    <svg className={this.state.activeClasses[0] ? "indicator--active" : "indicator--item__svg"} onClick={() => {this.toggle(0); this.scrollToTop()}}>
                        <use href={sprite + "#icon-home3"}></use>
                    </svg>
                </div>
                <div className={"indicator--item"}>
                    <svg className={this.state.activeClasses[1] ? "indicator--active" : "indicator--item__svg"} onClick={() => {this.toggle(1); this.scrollToAbout()}}>
                        <use href={sprite + "#icon-info"}></use>
                    </svg>
                </div>
                <div className={"indicator--item"}>
                    <svg className={this.state.activeClasses[2] ? "indicator--active" : "indicator--item__svg"} onClick={() => {this.toggle(2); this.scrollToBottom()}}>
                        <use href={sprite + "#icon-embed2"}></use>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Indicator;