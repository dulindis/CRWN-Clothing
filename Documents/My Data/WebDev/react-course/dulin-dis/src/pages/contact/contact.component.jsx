import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Contact = ({match, history, ...otherProps}) =>  {
    return (
        <div>
            <h1>Contact Page</h1>
        </div>
);
}

export default withRouter(Contact);
