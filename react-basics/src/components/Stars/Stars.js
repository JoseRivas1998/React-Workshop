import React from 'react';
import Star from './Star/Star';

const stars = (props) => {
    const stars = [];

    for (let i = 0; i < props.totalStars; i++) {
        let active = i <= props.selectedStar;
        if (props.hoverStar >= 0) {
            active = i <= props.hoverStar;
        }
        stars.push(<Star 
            key={i}
            hoverEnter={() => props.starHoverEnter(i)}
            hoverExit={props.starHoverExit}
            clicked={() => props.starClicked(i)}
            active={active} />)
    }

    return stars;
};

export default stars;
