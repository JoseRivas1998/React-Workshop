import React, {Component} from 'react';

import ReviewInput from '../../components/ReviewInput/ReviewInput';
import Reviews from '../../components/Reviews/Reviews';

class App extends Component {
  state = {
    totalStars: 5,
    hoverStar: -1,
    selectedStar: -1,
    reviewText: "",
    error: "",
    reviews: []
  };

  onStarHoverEnter = (starId) => {
      this.setState({hoverStar: starId});
  };

  onStarHoverExit = () => {
    const selectedStar = this.state.selectedStar;
    this.setState({hoverStar: selectedStar});
  };

  onSelectStar = (starId) => {
    this.setState({
      hoverStar: -1,
      selectedStar: starId
    });
  };

  onReviewTextChange = (event) => {
    this.setState({reviewText: event.target.value});
  };

  onSubmitReview = () => {
    if (this.state.selectedStar < 0) {
      this.setState({error: "Select a rating."});
      return;
    }
    if (this.state.reviewText.length === 0) {
      this.setState({error: "Enter a review."});
      return;
    }
    const review = {
      starRating: this.state.selectedStar,
      reviewText: this.state.reviewText
    };
    const newReviews = this.state.reviews.concat(review);
    this.setState({
      error: "",
      hoverStar: -1,
      selectedStar: -1,
      reviewText: "",
      reviews: newReviews
    });
  };

  render() {
    return (
      <div className="App">
        <ReviewInput 
          starHoverEnter={this.onStarHoverEnter}
          starHoverExit={this.onStarHoverExit}
          starClicked={this.onSelectStar}
          hoverStar={this.state.hoverStar}
          selectedStar={this.state.selectedStar}
          totalStars={this.state.totalStars}
          reviewText={this.state.reviewText}
          onReviewTextChange={this.onReviewTextChange}
          error={this.state.error}
          onSubmitReview={this.onSubmitReview} />
        <Reviews reviewList={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
