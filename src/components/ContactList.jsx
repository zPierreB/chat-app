import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



const ContactList = ({name, avatar, online}) => {
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

ContactList.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default ContactList;