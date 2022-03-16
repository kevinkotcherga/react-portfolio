import './footer.scss'
import Heart from '../../img/heart.svg'
import ArrowUp from '../../img/arrow_up.svg'

function Fotter() {
  return (
    <div className='f'>
      <p className='f-text'>
        FAIT AVEC
          <img className='heart' src={Heart} alt="" />
        PAR KEVIN KOTCHERGA
      </p>
      <p className='f-text'>REVENIR EN HAUT <img className='arrow-up' src={ArrowUp} alt="" /></p>
    </div>
  )
}

export default Fotter
