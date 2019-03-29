/*
 * @Author: devzhang 
 * @Date: 2019-03-29 13:48:39 
 * @Last Modified by: devzhang
 * @Last Modified time: 2019-03-29 14:19:36
 */


import React from 'react';


function Joke(props) {
    
    return (
        <div className="joke">
            <h3 style = {{display: !props.question && 'none'}}>Question: {props.punchLine}</h3>
            <h3 style = {{color: !props.question && '#888'}}>Answer: {props.punchLine}</h3>
        </div>
    )
}


export default Joke;