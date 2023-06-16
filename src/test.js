import React, { useState } from 'react';
 import axios from 'axios';

const SendMessageForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    // Create data object for POST request
    const data = {
      name: name,
      phone: phone,
      message: message
    };

    try {
      // Make a POST request using Axios
      const response = await axios.post("http://localhost:3000", data);
      console.log("Message sent successfully!");
      // Handle success response here
    } catch (error) {
      console.log("Error sending message: " + error);
      // Handle error response here
    }
  };

  return (
    <div>
      <h1>Send a Message</h1>
      <form onSubmit={sendMessage}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} /><br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br />

        <input type="submit" id="sendButton" value="Send" />
      </form>
    </div>
  );
};

export default SendMessageForm;
