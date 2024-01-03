import React from 'react';
import ClockBackground from '../../Background';
import Pins from '../../Pins';
import "./styles.css";

const ClockContainer = () => {

    return (
        <div className='ClockContainer'>
            <ClockBackground />
            <Pins />
        </div>
    );
};

export default ClockContainer;
