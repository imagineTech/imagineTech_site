import React from 'react';
import CountDown from 'react-countdown-now';

const Countdown = () => {
    return (
        <div className="timer">
            <div style={{fontSize:'3em'}}><CountDown date={1546300800000} /></div>
        </div>
    )
}

export default Countdown; 