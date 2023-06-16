import React, { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    try {
      await fetch('https://contactpg.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log("Message sent successfully!");
      setSuccessMessage('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log("Error sending message: " + error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">PR LABS</p>
              {successMessage && <p className="alert alert-success">{successMessage}</p>}
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput
                  label='Your Name'
                  id='form1'
                  type='text'
                  className='w-100'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput
                  label='Your Email'
                  id='form2'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput
                  label='Your Message'
                  id='form3'
                  type='text'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={sendMessage}>Send</MDBBtn>
              {successMessage && <p>{successMessage}</p>}
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' alt='Card' className='img-fluid' />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
