import React from "react";
import "../assets/styles/Form.css";

function Form(){
return(
    <div className="form" id="form">
      <div className="heading">Get in Touch</div>
      <form className="form-main" name="contact" method="POST" data-netlify="true">
        <div className="sub-heading">Brew us a message</div>
        <div className="form-inputs">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required/>
        </div>
        <div className="form-inputs">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required/>
        </div>
        <div className="form-inputs">
          <label>Message</label>
          <textarea className="form-message" placeholder="Your message" name="message" rows={3} required></textarea>
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  )
}

export default Form;