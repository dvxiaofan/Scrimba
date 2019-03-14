import React from 'react';

function Header() {
    const firstName = "德希云●";
    const lastName = "数据平台";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "早上";
    } else if (hours >= 12) {
        timeOfDay = "下午"
    } else {
        timeOfDay = "晚上"
    }

    return (
        <header className="navbar">
            <h2>欢迎来到 {`${firstName} ${lastName}`}</h2>
            
            {/* <p>现在是：{timeOfDay}</p> */}
        </header>
    )
}



export default Header;