import React from 'react';
import CountDown from 'react-countdown-now';

const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div>We are live <a href="https://imaginetech.net">here</a></div>;
  } else {
    // Render a countdown
    return <span>{days} days{" "}{hours} hours{" "}{minutes} minutes{" "}{seconds} seconds</span>;
  }
};

const Countdown = () => {
    return (
        <div className="timer">
            <div style={{fontSize:'3em'}}><CountDown date={1546300800000} renderer={renderer}/></div>
        </div>
    )
}

export default Countdown; 