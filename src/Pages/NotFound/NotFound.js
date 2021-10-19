import React from 'react';
import './NotFound.css';
import notFound from '../../Images/notFound/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="my-4" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;