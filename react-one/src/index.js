import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';


function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        backgroundColor: '#ddd'
    }

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = '#fff';
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = '#ff0';
    }
    else {
        timeOfDay = "night";
        styles.color = '#00f';
    }

    return (
        <h1 style={styles}>Good {timeOfDay}</h1>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));