import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wbyl9gc', 'template_5pxrj67', form.current, 'vLwnBiR-XrCms7pCM')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="c" id="contact">

      <div className="c-wrapper">

          <h1 data-aos='fade-up'>RENCONTRONS NOUS</h1>

        <div className="c-right">
          <form ref={form} onSubmit={sendEmail} className='form-container'>
            <input type="text" placeholder='Nom' name='user_name' />
            <input type="text" placeholder='Sujet' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>ENVOYER</button>
            { done && "Message envoyé" }
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
