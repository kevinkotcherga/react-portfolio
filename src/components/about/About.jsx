import './about.scss'
import window from "../../img/window.jpg";

const About = () => {
  return (
    <div className="a" id="profil">

      <div className="a-left">
        <h1 className="a-title" data-aos='fade-up' data-aos-duration="1000" data-aos-offset="-500" data-aos-anchorPlacement='top' >À PROPOS DE MOI</h1>
        <p className="a-sub" data-aos='fade-up' data-aos-duration="1500" data-aos-offset="-700">Développeur depuis plus de <span className='bold-span'>2 ans </span>j'ai réalisé de <span className='bold-span'>nombreuses</span> applications et différents projets</p>
        <p className="a-desc" data-aos='fade-up' data-aos-duration="2000" data-aos-offset="-700">Diplomé de l'école le Wagon, j'ai obtenu mon <span className='bold-span'>bac +4 </span>et je prépare un <span className='bold-span'>nouveau</span> diplôme à la Wild Code School </p>
        <p className="a-desc-bottom" data-aos='fade-up' data-aos-duration="2500" data-aos-offset="-700">Aujourd'hui je reste informé des dernières<span className='bold-span'> nouveautés </span> et je construis des interfaces <span className='bold-span'> modernes </span> et <span className='bold-span'>ergonomiques</span></p>
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
