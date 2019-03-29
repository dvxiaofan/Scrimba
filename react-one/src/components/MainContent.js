/*
 * @Author: devzhang 
 * @Date: 2019-03-29 11:26:35 
 * @Last Modified by:   devzhang 
 * @Last Modified time: 2019-03-29 11:26:35 
 */
import React from 'react';
import TodoItem from './TodoItem';

function MainContent() {
    return (
        <header>
            <div className="content">
                <div className="content-item">
                    <input type="checkbox" className="checkInput" />
                    <span className="text">第一个选项内容</span>
                </div>
                <div className="content-item">
                    <input type="checkbox" className="checkInput" />
                    <span className="text">第二个选项内容</span>
                </div>
                <div className="content-item">
                    <input type="checkbox" className="checkInput" />
                    <span className="text">第三个选项内容</span>
                </div>
                <div className="content-item">
                    <input type="checkbox" className="checkInput" />
                    <span className="text">第四个选项内容</span>
                </div>
            </div>
        </header>
    )
}

export default MainContent;