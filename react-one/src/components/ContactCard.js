/*
 * @Author: devzhang 
 * @Date: 2019-03-29 11:26:14 
 * @Last Modified by: devzhang
 * @Last Modified time: 2019-03-29 11:42:55
 */

import React from 'react';



function ContactCard(props) {
    
    return (
        <div className="contact-card" >
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard;