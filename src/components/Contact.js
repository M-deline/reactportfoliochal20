// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';
// import Nav from './components/Nav';


function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
  console.log(process.env.REACT_APP_MY_VARIABLE);

  const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;


  if (state.succeeded) {
    return (
      <div>
        <p>Thank you</p>
      </div>
    );
}


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Error: Please enter a valid email.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Error: ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Your Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Your Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Write Your Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Send</button>
      </form>
    </div>
  );
        }
export default Contact;
