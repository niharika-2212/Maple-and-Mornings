import React from "react";
import "../assets/styles/Form.css";

function Form(){
return(
    <div className="form" id="form">
      <div className="heading">Get in Touch</div>
      <form className="form-main">
        <div className="sub-heading">Brew us a message</div>
        <div className="form-inputs">
          <label>Name</label>
          <input type="text" required/>
        </div>
        <div className="form-inputs">
          <label>Email</label>
          <input type="email" required/>
        </div>
        <div className="form-inputs">
          <label>Message</label>
          <textarea className="form-message" rows={3}></textarea>
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  )
}

export default Form;