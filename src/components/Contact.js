// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
//https://formspree.io/f/xwkddnnv
import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('https://formspree.io/f/xwkddnnv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='form-container'>
    
    <form onSubmit={handleSubmit}>
      <p className='contact-text'>Name:</p>
      <input className="contact-text" type="text" name="name" onChange={handleChange} />
      <p className='contact-text'>Email:</p>
      <input className="contact-text" type="email" name="email" onChange={handleChange} />
      <p className='contact-text'>Write your message:</p>
      <textarea className="contact-text" name="message" onChange={handleChange} />
      <br></br>
      <br></br>
      
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Contact;

