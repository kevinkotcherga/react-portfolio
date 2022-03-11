import { useRef } from 'react'
import './contact.css'

export const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1>RENCONTRONS NOUS</h1>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit} className='form-container'>
            <input type="text" placeholder='Nom' name='user_name' />
            <input type="text" placeholder='Sujet' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
