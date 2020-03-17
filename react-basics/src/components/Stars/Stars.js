import React from 'react';
import Star from './Star/Star';

const stars = (props) => {
    const stars = [];

    for (let i = 0; i < props.totalStars; i++) {
        let active = Math.random() < 0.5;
        stars.push(<Star 
            key={i}
            active={active} />)
    }

    return stars;
};

export default stars;
