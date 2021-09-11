import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Artwork = ({match, history, ...otherProps}) =>  {
    console.log('artwork  props:', match.params.itemId);
    const {title, technique} = otherProps;
    console.log(title, technique);
    return (
        <div>
            <h1>artwork no: {match.params.itemId}</h1>
            {/* <Link to='/'>homepage</Link> */}
            <h2>{title}</h2>
            <h2>{technique}</h2>
            <button onClick={()=>history.push('/gallery')}>take me to gallery</button>
            <button onClick={()=>history.push('/')}>take me back to homepage</button>


        </div>
);
}

export default withRouter(Artwork);
