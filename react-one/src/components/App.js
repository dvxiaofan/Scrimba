/*
 * @Author: devzhang 
 * @Date: 2019-03-29 11:26:26 
 * @Last Modified by: devzhang
 * @Last Modified time: 2019-03-29 14:23:21
 */
import React from 'react';

import Joke from './Joke';
import jokesData from '../jokesData.js';

import './App.css';

function App() {
    const jokeComponents = jokesData.map( joke => <Joke key = { joke.id } question = { joke.question } punchLine = { joke.punchLine } /> );
    
    return (
        <div>
            { jokeComponents }
        </div>
    )
}

export default App;