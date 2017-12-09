import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsContainer from './NewsContainer';
import SteeringContainer from './SteeringContainer';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  main: state.main,
  email: state.user.email,
});

const mapDispatchToProps = actions;

class MainContainer extends Component {

  componentDidMount(){
    this.props.onLoad();
  }

  render() {
    return (
      <div id="mainContainer">
        <div onClick={this.props.onLoad} id="headerContainer">
          <p id="header">The Spectrum Report</p>
        </div>
        <SteeringContainer email={this.props.email} sliderValue={this.props.main.sliderValue} id="steeringContainer"/>
        <NewsContainer handleClick={this.props.updateFavorites} main={this.props.main} email={this.props.email} id="newsContainer" />
      </div>
    );
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
