/*
 * @Author: devzhang 
 * @Date: 2019-03-29 11:26:26 
 * @Last Modified by: devzhang
 * @Last Modified time: 2019-03-29 13:41:20
 */
import React from 'react';

import ContactCard from './ContactCard';

import './App.css';

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact = {{
                    name:'xiaoming',
                    imgUrl:'http://placebear.com/300/200',
                    phone:'13548970707',
                    email:'14234995@163.com'
                }}
                
            />
            <ContactCard 
                contact = {{
                    name:'hello',
                    imgUrl:'http://placekitten.com/400/200',
                    phone:'13548970707',
                    email:'14234995@163.com'
                }}
            />
            <ContactCard 
                contact = {{
                    name:'devzhang',
                    imgUrl:'http://placekitten.com/400/300',
                    phone:'13548970707',
                    email:'14234995@163.com'
                }}
            />
            <ContactCard 
                contact = {{
                    name:'kitten',
                    imgUrl:'http://placekitten.com/200/100',
                    phone:'13548970707',
                    email:'14234995@163.com'
                }}
            />
        </div>
    )
}

export default App;