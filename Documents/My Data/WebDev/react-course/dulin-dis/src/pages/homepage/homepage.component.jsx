import React from 'react';

const Homepage = (props) =>  (
        <div>
            <h1>homepage</h1>
            <button onClick={()=>props.history.push('/gallery')}>take me to gallery</button>
            <button onClick={()=>props.history.push('/contact')}>contact me</button>
        </div>
);

export default Homepage;
