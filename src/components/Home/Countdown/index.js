import React from 'react';
import CountDown from 'react-countdown-now';

let styles = {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: '3em',
    display:'flex',
    justifyContent:'space-around'
}

const Countdown = () => {
    return (
        <div style={styles}><CountDown date={Date.now() + 10000000000} /></div>
    )
}

export default Countdown; 