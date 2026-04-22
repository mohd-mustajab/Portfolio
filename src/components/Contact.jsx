import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'
import Footer from './Footer'
import "./Contact.css"
import Swal from 'sweetalert2';


const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      sub: formData.get('sub')?.toString().trim() || '',
      msg: formData.get('msg')?.toString().trim() || '',
      from_name: formData.get('name')?.toString().trim() || '',
      reply_to: formData.get('email')?.toString().trim() || '',
      subject: formData.get('sub')?.toString().trim() || '',
      message: formData.get('msg')?.toString().trim() || '',
    };
    setIsSending(true);

    emailjs
      .send('service_0bm968f', 'template_livmhmm', templateParams, {
        publicKey: 'oshirECPffq6jKUQz',
      })
      .then(
        () => {
          Swal.fire({
            title: "Sent!",
            text: "Your message has been sent!",
            icon: "success"
          });
         form.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          Swal.fire({
            title: "Something went wrong",
            text: error?.text || error?.message || "Please verify your EmailJS configuration.",
            icon: "error"
          });
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <div>
      <Navbar/>
      <div className="main">
  <p className="head">Contact Me!</p>
  <form onSubmit={sendEmail}>
    <input className="input" id="name" type="text" placeholder="Your Name" name='name' required />
    <input className="input" id="email" type="text" placeholder="Email" name='email' required />
    <input className="input" id="phone" type="text" placeholder="Phone Number" name='phone' />
    <input className="input" id="sub" type="text" placeholder="Subject" name='sub' required />
    <textarea className="input textarea" id="msg" placeholder="Your Message" name='msg' required defaultValue={""} />
    <div className="btndiv"><button className="btn" type="submit" name='btn' disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button></div>
  </form>
</div>
<Footer/>
    </div>
  )
}

export default Contact
