import React from 'react'
import "./Contact.css"
import { Form } from 'react-router-dom';
export const ContactData = async ({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    
  } catch (error) {
    console.log(error.message);
  }
}
 const Contact = () => {
  return (
    <div className='contact'>
      <section className='section_contact'>
<div className="container">
  <h2 className='section_common_heading'>Contact Us</h2>
  <p className='section_common_sebheading'>Get in touch with us. We are always to help you.</p>
</div>

<div className="grid">
  <div className="contact_content">
    <Form method='POST' action='/contact'>
      <div className="grid_two">
        <div className='div'>
          <label htmlFor='username'>Full Name : </label>
          <input type="text" name='username' id='username' required autoComplete='off' placeholder='Enter Your Username' />
        </div>

        <div className='div'>
          <label htmlFor='email'>Email Address : </label>
          <input type="email" name='email' id='email' required autoComplete='off' placeholder='Enter Your email' />
        </div>

        <div className='div2'>
          <label htmlFor='message'>Message : </label>
          <textarea type="message" name='message' id='message' cols="30" rows="10" placeholder='We are always here to help you.' ></textarea>
          <button type='message'>Send Message</button>
        </div>

      </div>
    </Form>
  </div>

  
</div>
      </section>
      <img className='img' src="/public/messageforfirstproject.avif" alt="send me" />

    </div>
  )
}
export default Contact;
