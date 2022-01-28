import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';


const ChatInput = (props) => {
    const [message, setMessage] = useState('');

    console.log(props.auth)

    const user = props.auth.username;

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(connect(mapStateToProps)(ChatInput));