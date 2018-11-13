import React, { Component } from 'react';
import HomeContent from './Content';

class HomeContainer extends Component {
  render() {
    return (
      <div className="coming-soon">
        <div className="inner-bg">
          <HomeContent />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
