/*jshint esversion: 6 */
import React from 'react';

const MainTopic = (props) => (

    <div className="main-topic">
        <h1>{props.t}</h1>
        <p>{props.l}</p>
        <p>{props.a}</p>
    </div>
);

export default MainTopic;
