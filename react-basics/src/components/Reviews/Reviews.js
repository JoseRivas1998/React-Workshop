import React from 'react';

import Review from './Review/Review';

const reviews = (props) => {
    return props.reviewList
        .map((reviewVal, reviewIndex) => (
            <Review 
                key={reviewIndex} 
                rating={reviewVal.starRating} 
                reviewText={reviewVal.reviewText} />
        ));
};

export default reviews;