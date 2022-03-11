import { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
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
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1>RENCONTRONS NOUS</h1>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail} className='form-container'>
            <input type="text" placeholder='Nom' name='user_name' />
            <input type="text" placeholder='Sujet' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>Envoyer</button>
            { done && "Message envoyé" }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
