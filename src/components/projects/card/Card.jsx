import React from 'react';

const Card = (props) => {
    return (
        <div className={"projects--live__container--card green"}>
            <h1 className={"projects--live__container--card__title"}>{props.title}</h1>
            <div className={"projects--live__container--card__box"}>
                <h3 className={"projects--live__container--card__box--subtitle"}>{props.description}</h3>
                <a className={"projects--live__container--card__box--button"} href={`${props.website}`}>Megtekintés</a>
            </div>
        </div>
    );
};

export default Card;