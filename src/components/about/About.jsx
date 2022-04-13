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
        <h1 className="a-title">A PROPOS DE MOI</h1>
        <p className="a-sub">Il y a quelques mois j'ai découvert les joies du code.</p>
        <p className="a-desc">Je me suis reconverti en Développeur Fullstack Ruby on Rails <br/>grâce au bootcamp de 9 semaines au Wagon.</p>
        <p className="a-desc-bottom">Aujourd'hui je parfaire mes compétences <br/> et me spéciale en <span className='bold-span'>Front</span> avec <span className='bold-span'>React</span>.</p>
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
