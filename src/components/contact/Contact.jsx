import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

export const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1>RENCONTRONS NOUS</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src={Phone}
                alt=""
                className='c-icon'
              />
              0644305032
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src={Email}
                alt=""
                className='c-icon'
              />
              kevin.kotcherga@gmail.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src={Address}
                alt=""
                className='c-icon'
              />
              Paris
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque asperiores nam recusandae saepe minus velit. Dolore illum cupiditate, nemo assumenda quidem consectetur enim quisquam, id est culpa, architecto rerum hic?
          </p>
          <form>
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
