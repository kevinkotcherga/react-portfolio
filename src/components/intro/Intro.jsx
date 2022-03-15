import Computer from '../../img/computer.png'
import { AiOutlineArrowDown } from "react-icons/ai";

import "./intro.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Intro = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="i">
      <div className="i-container">

        <div className="i-header">
          <div data-aos='fade-up' data-aos-duration="1000" className="i-name-header">
            Kevin Kotcherga
          </div>
          <div data-aos='fade-up' data-aos-duration="1500" className="i-desc-header">
            FullStack Node.js, React & Ruby On rails
          </div>
          <div data-aos='fade-up' data-aos-duration="2000" className="i-city-header">
            Basé à Paris
          </div>
          <div className="i-nav-header">
            <ul>
              <li data-aos='fade-up' data-aos-duration="1000">Projets,</li>
              <li data-aos='fade-up' data-aos-duration="2000">Profil,</li>
              <li data-aos='fade-up' data-aos-duration="3000">Contact</li>
            </ul>
          </div>
        </div>

        <div className="i-container-big-desc">
          <h2 data-aos='fade-up' data-aos-duration="2000">DEVELOPPEUR WEB</h2>
        </div>

         <img data-aos='fade-up' src={Computer} alt="computer" className='i-img' />

        <div data-aos='fade-up' className="i-container-big-name">
          <AiOutlineArrowDown size={200}
          className="arrow" />
          <h1 data-aos='fade-up' data-aos-duration="2000">KEVIN <br/> KOTCHERGA</h1>
        </div>

      </div>
    </div>
  );
};

export default Intro;
