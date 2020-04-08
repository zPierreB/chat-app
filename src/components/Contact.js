import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="Owen" />
                <div className="Status name">
                    <p className="name">{this.props.name}</p>
                    <p className="status text" onClick={ event => {
                      const newBool = !this.state.online;
                      this.setState({online: newBool});
                    }}>{this.state.online ? <span className="status-online"></span> : <span className="status-offline"></span>} {this.state.online ? "Online" : "Offline"}</p>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default Contact;