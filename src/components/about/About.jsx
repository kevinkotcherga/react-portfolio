import './about.scss'
import window from "../../img/window.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="a" id="profil">

      <div className="a-left">
        <h1 className="a-title" data-aos='fade-up'>A PROPOS DE MOI</h1>
        <p className="a-sub" data-aos='fade-up' data-aos-duration="1000">Il y a quelques mois j'ai découvert les joies du code.</p>
        <p className="a-desc" data-aos='fade-up' data-aos-duration="2000">Je me suis reconverti en Développeur Fullstack Ruby on Rails <br/>grâce au bootcamp de 9 semaines au Wagon.</p>
        <p className="a-desc-bottom" data-aos='fade-up' data-aos-duration="3000">Aujourd'hui je parfaire mes compétences et réalise <br/>le<span className='bold-span'> maximum</span> de projet pour <span className='bold-span'>m'améliorer</span>.</p>
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
