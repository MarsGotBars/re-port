import {React, useRef, useState} from "react";
import "./contact.css";
import { BsMailbox, BsDiscord, BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [inpText, setInp] = useState('Send Message');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zk8yd2s', 'template_tyzhtau', form.current, 'EoSbgHecjwAJEM_Y_')
      .then((result) => {
          setInp('Sent!');
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const pulse = () =>{
    const button = form.current.querySelector('#submit');
    button.classList.add('womp');
    const unWomp = setTimeout(() => {
      button.classList.remove('womp');
    }, 1000);
    unWomp();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsMailbox className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>marcinm@live.nl</h5>
            <a href="mailto:marcinm@live.nl" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsDiscord className="contact__option-icon"/>
            <h4>Discord</h4>
            <h5>MarsGotBars#2858</h5>
            <a
              href="https://discordapp.com/users/958084070305304676"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>06 28077704</h5>
            <a
              href="https://wa.me/31628077704?text=Hey%20Marcin!"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <input type="submit" id="submit" className="btn btn-primary" value={inpText} onClick={pulse}/>
        </form>
      </div>
    </section>
  );
}
