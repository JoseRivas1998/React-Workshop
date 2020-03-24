import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import classes from './Star.module.css';

const star = (props) => {
    const classList = [classes.Star];
    if (props.active) {
        classList.push(classes.active);
    }
    return (
        <FontAwesomeIcon 
            onMouseEnter={props.hoverEnter}
            onMouseLeave={props.hoverExit}
            onClick={props.clicked}
            className={classList.join(' ')}
            icon={faStar} />
    );
};

export default star;
