import React from 'react';

import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <h1 className='text-3xl'>Here is Rest Countries</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;