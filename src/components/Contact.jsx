import React from "react";
import "../assets/styles/Contact.css"
function Contact(){
return(
    <div className="contact" id="contact">
      <div className="heading">Contact Us</div>
      <div className="contact-main">
        <div className="contact-details">
          <div>
            <div className="heading-small">Email</div>
            <div><a href="mainto:hello@mapleandmornings.com">hello@mapleandmornings.com</a></div>
          </div>
          <div>
            <div className="heading-small">Phone</div>
            <div>+91 92831 38482</div>
          </div>
          <div>
            <div className="heading-small">Address</div>
            <div>1st Floor, Eldora Arcade, Church Street, Bangalore</div>
          </div>
          <div>
            <div className="heading-small">Timings</div>
            <div>Monday to Friday: 8:00 AM - 10:00 PM <br/>
                Saturday & Sunday: 9:00 AM - 11:00 PM</div>
          </div>

        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124500.06496339699!2d77.60397806363119!3d12.80270452627138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%2C%20Eldora%20Arcade%2C%20Church%20Street%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1750262868726!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
      </div>
    </div>
  )
}

export default Contact;