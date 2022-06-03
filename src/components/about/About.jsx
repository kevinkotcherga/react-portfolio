import './about.scss'
import window from "../../img/window.jpg";

const About = () => {
  return (
    <div className="a" id="profil">

      <div className="a-left">
        <h1 className="a-title" data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-500" data-aos-anchorPlacement='top' >A PROPOS DE MOI</h1>
        <p className="a-sub" data-aos='fade-up' data-aos-duration="1500" data-aos-offset="-700">Je développe depuis plus d'un 1 an différents projets et applications.</p>
        <p className="a-desc" data-aos='fade-up' data-aos-duration="2000" data-aos-offset="-700">J'ai été diplomé de l'école le Wagon et obtenu mon bac +4 en informatique.</p>
        <p className="a-desc-bottom" data-aos='fade-up' data-aos-duration="2500" data-aos-offset="-700">Aujourd'hui je réalise le <span className='bold-span'> maximum </span>de projets pour gagner en <span className='bold-span'> compétences</span> et continuer à <span className='bold-span'>progresser</span>.</p>
      </div>

       <div className="a-right">
          <img
            src={window}
            alt=''
            className='a-img'
          />
      </div>

    </div>
  )
}

export default About
