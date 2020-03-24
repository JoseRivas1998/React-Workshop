import React from 'react';

import Card from '../../hoc/Card/Card';
import Stars from '../Stars/Stars';

const reviewInput = (props) => {
    return (
        <Card>
            <Stars 
                starHoverEnter={props.starHoverEnter}
                starHoverExit={props.starHoverExit}
                starClicked={props.starClicked}
                hoverStar={props.hoverStar}
                selectedStar={props.selectedStar}
                totalStars={props.totalStars} />
            <textarea
                value={props.reviewText}
                onChange={props.onReviewTextChange}/>
        </Card>
    );
};

export default reviewInput;
