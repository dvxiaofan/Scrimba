import React from 'react';

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
            </div>
        </header>
    )
}

export default MainContent;