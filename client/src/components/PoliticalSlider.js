import React from 'react';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton'; 
// import logo from './red-blue-line.png'; 

const PoliticalSlider = (props) => {
  // console.log(props.sliderValue);
  let buttonClass = 'visible';
  if (props.email !== '') buttonClass = 'visible';

  return (
    <div id="slider">
      <Slider
        defaultValue={0}
        step={1}
        min={-10}
        max={10}
        value={props.sliderValue}
        onChange={(e, val) => {
          props.sliderChange(val);
          props.filterArticles();
        }}
      />
      <img id='red-blue-line' src={'./red-blue-line.png'}/>
      <div id="sliderText">
        Adjusting the slider modifies the political leaning of the news below. 
      </div>
      <div className={buttonClass}>
        <FlatButton onClick={props.updateSlider}>
          Click to save your slider location!
        </FlatButton>
      </div>
    </div>
  );
};

module.exports = PoliticalSlider;
