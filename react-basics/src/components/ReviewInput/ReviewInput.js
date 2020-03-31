import React from 'react';

import Card from '../../hoc/Card/Card';
import Stars from '../Stars/Stars';
import classes from './ReviewInput.module.css';

const reviewInput = (props) => {
    let error = null;
    if (props.error.length > 0) {
        error = <p className={classes.Danger}>{props.error}</p>
    }
    return (
        <Card>
            <label className={classes.Label}>Select a Rating</label>
            <Stars 
                starHoverEnter={props.starHoverEnter}
                starHoverExit={props.starHoverExit}
                starClicked={props.starClicked}
                hoverStar={props.hoverStar}
                selectedStar={props.selectedStar}
                totalStars={props.totalStars} />
            <label className={classes.Label}>Enter Review</label>
            <textarea
                className={classes.TextArea}
                value={props.reviewText}
                rows={5}
                placeholder="Type Review Here"
                onChange={props.onReviewTextChange}/>
            <button
                className={classes.Btn}
                onClick={props.onSubmitReview}>Submit Review
            </button>
            {error}
        </Card>
    );
};

export default reviewInput;
