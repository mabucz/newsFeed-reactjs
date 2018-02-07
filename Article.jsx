/*jshint esversion: 6 */
import React from 'react';

const Article = (props) => (
    <div className="article" onClick={(event) => {
        props.click(event);
    }}>
        <h2>{props.t}</h2>
        <p>{props.l}</p>
    </div>
);

export default Article;
