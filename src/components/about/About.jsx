import './about.css'
import window from "../../img/window.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="a">
      <div className="a-left">

          <img
            src={window}
            alt=''
            className='a-img'
          />

      </div>
      <div className="a-right">
        <h1 data-aos='fade-up' className="a-title">A PROPOS DE MOI</h1>
        <p data-aos='fade-up' className="a-sub">Il y a quelques mois j'ai découvert les joies du code.</p>
        <p data-aos='fade-up' className="a-desc">Je me suis reconverti en Développeur Fullstack Ruby on Rails grâce au bootcamp de 9 semaines du Wagon.</p>
        <p data-aos='fade-up' className="a-desc-bottom">Aujourd'hui je parfaire mes compétences et me spéciale dans <span className='bold-span'>Node.js</span> et <span className='bold-span'>React</span>.</p>
      </div>
    </div>
  )
}

export default About
