import Computer from '../../img/computer.jpg'
import Arrow from '../../img/arrow.svg'
import { HashLink } from 'react-router-hash-link';

import "./intro.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Intro = () => {

  useEffect(() => {
    AOS.init({once: false, mirror : false});
    AOS.refresh();
  }, []);

  return (
    <div className="i" id="i">
      <div className="i-container">

        <div className="i-header">

          <div className="i-desc-header">
            <div data-aos='fade-up' data-aos-duration="1000" className="i-name-header">
              Kevin Kotcherga
            </div>
            <div data-aos='fade-up' data-aos-duration="1500" className="i-stack-header">
              Frontend React.js, Next.js & Typescript
            </div>
            <div data-aos='fade-up' data-aos-duration="2000" className="i-city-header">
              Basé à Paris
            </div>
          </div>

          <div className="i-nav-header">
            <ul>
              <li data-aos='fade-up' data-aos-duration="1000"><HashLink smooth to="/#projects">Projets,</HashLink></li>
              <li data-aos='fade-up' data-aos-duration="2000"><HashLink smooth to="/#profil">Profil,</HashLink></li>
              <li data-aos='fade-up' data-aos-duration="3000"><HashLink smooth to="/#contact">Contact</HashLink></li>
            </ul>
          </div>

        </div>

        <div className="i-container-big-desc">
          <h2 data-aos='fade-up' data-aos-duration="1000">DEVELOPPEUR <br/>WEB</h2>
          <img data-aos='fade-up' data-aos-duration="1500" src={Computer} alt="computer" className='i-img' />
        </div>



        <div data-aos='fade-up' data-aos-duration="2000" className="i-container-big-name">
          <img className="arrow" src={Arrow} alt="" />
          <h1>KEVIN <br/> KOTCHERGA</h1>
        </div>

      </div>
    </div>
  );
};

export default Intro;
