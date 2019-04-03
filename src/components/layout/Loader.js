import React from 'react';
import loader from './loader.gif';

export default () => {
    return(
        <div>
            <img src={loader} alt="Loading..." className="loader"/>
        </div>
    )
}