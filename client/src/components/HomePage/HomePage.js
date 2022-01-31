import React from 'react';
import Agents from '../Agents/Agents';
import Home from '../Home/Home';
import Users from '../Users/Users';
import UseUrl from '../UseUrl/UseUrl';
import ZoomingCare from '../ZoomingCare/ZoomingCare';

const HomePage = () => {
    return (
        <div>
            <Home />
            <UseUrl />
            <Users />
            <Agents />
            <ZoomingCare />
        </div>
    );
};

export default HomePage;