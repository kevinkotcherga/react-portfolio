import './about.scss'
import window from "../../img/window.jpg";

const About = () => {
  return (
    <div className="a" id="profil">

      <div className="a-left">
        <h1 className="a-title" data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-500" data-aos-anchorPlacement='top' >A PROPOS DE MOI</h1>
        <p className="a-sub" data-aos='fade-up' data-aos-duration="1500" data-aos-offset="-700">Il y a quelques mois j'ai découvert les joies du code.</p>
        <p className="a-desc" data-aos='fade-up' data-aos-duration="2000" data-aos-offset="-700">Je me suis reconverti en Développeur Web Fullstack grâce <br/> au bootcamp de 9 semaines au Wagon.</p>
        <p className="a-desc-bottom" data-aos='fade-up' data-aos-duration="2500" data-aos-offset="-700">Aujourd'hui je me spécialise en <span className='bold-span'> front </span>et réalise le<span className='bold-span'> maximum</span> <br/> de projet pour <span className='bold-span'>m'améliorer</span>.</p>
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
