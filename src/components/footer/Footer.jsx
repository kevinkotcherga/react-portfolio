import './footer.scss'
import Heart from '../../img/heart.svg'
import ArrowUp from '../../img/arrow_up.svg'
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='f'>
      <p className='f-text'>
        FAIT AVEC
          <img className='heart' src={Heart} alt="" />
        PAR KEVIN KOTCHERGA
      </p>
      <p className='f-text'><HashLink smooth to="/#i">REVENIR EN HAUT <img className='arrow-up' src={ArrowUp} alt="" /> </HashLink> </p>
    </div>
  )
}

export default Footer
