import React from 'react';
import { animated, useSpring } from 'react-spring';
import './main.scss';

const Main = () => {

    const trans4 = (x, y) => `translate3d(${x / 30}px,${y / -25}px,0)`

    const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 30}px,0)`

    const trans2 = (x, y) => `translate3d(${x / -25}px,${y / 30}px,0)`

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 200, friction: 45 } }));

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

    return (
        <div className={"heading__main"} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className={"heading__main--moon"} style={{ transform: props.xy.interpolate(trans4)}}/>
            <animated.div className={"heading__main--plane"} style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className={"heading__main--meteor"} style={{ transform: props.xy.interpolate(trans2) }} />
            <div className={"heading__main--text"}>
                <h1 className={"heading__main--text__heading"}>Valami nagyon hosszú jól hangzó szöveg</h1>
                <h3 className={"heading__main--text__subheading"}>Lorem ipsum dolor sit amet, consectetur a sed do adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim a ex ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
            </div>
            <div className={"heading__main--scroll"}>
                <div className={"heading__main--scroll__mouse"}>
                    <div className={"heading__main--scroll__mouse--wheel"}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;