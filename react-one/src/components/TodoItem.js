/*
 * @Author: devzhang 
 * @Date: 2019-03-29 11:26:43 
 * @Last Modified by:   devzhang 
 * @Last Modified time: 2019-03-29 11:26:43 
 */
import React from 'react';



function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" className="checkInput" />
            <p className="text">第一个选项内容</p>
        </div>
    )
}


export default TodoItem;