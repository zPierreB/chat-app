import React from 'react';
import './Contact.css';

const name = 'Owen Kennedy';
const avatar = "https://randomuser.me/api/portraits/men/81.jpg";
const online = false;


 const Contact = () => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="Owen" />
            <div className ="Status name">
                <p className="name">{name}</p>
                <p className="status text">{online ? <span className="status-online"></span> : <span className="status-offline"></span>} {online ? "Online" : "Offline"}</p>
            </div>
        </div> 
    );
}

export default Contact;