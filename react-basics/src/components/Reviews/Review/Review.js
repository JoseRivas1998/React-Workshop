import React from 'react';

import Card from '../../../hoc/Card/Card';
import Stars from '../../Stars/Stars';

const review = (props) => (
    <Card>
        <Stars
            totalStars={5}
            hoverStar={props.rating}
            selectedStar={props.rating}
            starHoverEnter={() => {}}
            starHoverExit={() => {}}
            starClicked={()=>{}}/>
        <p>{props.reviewText}</p>
    </Card>
);

export default review;
