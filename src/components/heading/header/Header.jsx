import React from 'react';
import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import sprite from '../../../assets/svg/sprite.svg';
import './header.scss';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            closed: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ closed: !this.state.closed });
    }


    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToAbout() {
        scroll.scrollTo(1000);
    }

    render() {
        return (
            <header className={"heading__header"}>
                <div className={"heading__header--brand"}>
                    <h2 className={"heading__header--brand__item"}>Feigl Gergő</h2>
                </div>
                <div className={"heading__header--nav"}>
                    <h2 className={"heading__header--nav__item"} onClick={this.scrollToTop}>Kezdőlap</h2>
                    <h2 className={"heading__header--nav__item"} onClick={this.scrollToAbout}>Bemutatkozás</h2>
                    <h2 className={"heading__header--nav__item"} onClick={this.scrollToBottom}>Projektek</h2>
                </div>
                <div className={"heading__header--hamburger"}>
                    <svg className={"heading__header--hamburger__svg"} onClick={this.toggleMenu}>
                        <use href={sprite + "#icon-menu"} />
                    </svg>
                </div>
                <div className={this.state.closed ? "heading__header--menu" : "closed"}>
                    <h2 className={"heading__header--nav__item heading__header--menu__item"} onClick={this.scrollToTop}>Kezdőlap</h2>
                    <h2 className={"heading__header--nav__item heading__header--menu__item"} onClick={this.scrollToAbout}>Bemutatkozás</h2>
                    <h2 className={"heading__header--nav__item heading__header--menu__item"} onClick={this.scrollToBottom}>Projektek</h2>
                    <div className={"heading__header--menu__close"}>
                        <svg onClick={this.toggleMenu}>
                            <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
                            <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
                        </svg>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;