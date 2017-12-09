import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import PoliticalSlider from '../components/PoliticalSlider';
import * as actions from '../actions/actions';
// import { bindActionCreators } from 'redux'; //refactor to use bindActionCreators

const mapStateToProps = state => ({
  // add pertinent state here
  steering: state.steering,
});

const mapDispatchToProps = actions;

class SteeringContainer extends Component {
  render() {
    return (
      <div>
        <h3>Read Across the Aisle.</h3>
        <Header
          steering={this.props.steering}
          onSubmit={this.props.onSubmit}
          handleSearch={this.props.handleSearch}
          handleKeyPress={this.props.handleKeyPress}
        />
        <PoliticalSlider
          email={this.props.email}
          sliderValue={this.props.sliderValue}
          sliderChange={this.props.sliderChange}
          filterArticles={this.props.filterArticles}
          updateSlider={this.props.updateSlider}
        />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SteeringContainer);
