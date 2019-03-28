import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import TodoItem from './TodoItem';

import './App.css';

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App;