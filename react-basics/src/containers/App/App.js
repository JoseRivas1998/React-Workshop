import React, {Component} from 'react';

import ReviewInput from '../../components/ReviewInput/ReviewInput';

class App extends Component {
  state = {
    totalStars: 5,
    hoverStar: -1,
    selectedStar: -1,
    reviewText: ""
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
          onReviewTextChange={this.onReviewTextChange} />
      </div>
    );
  }
}

export default App;
