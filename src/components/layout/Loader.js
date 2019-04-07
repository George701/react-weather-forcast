import React from 'react';
import loader from './s-loader.gif';

export default () => {
    return(
        <React.Fragment>
            <img src={loader} alt="Loading..." className="loader"/>
        </React.Fragment>
    )
}