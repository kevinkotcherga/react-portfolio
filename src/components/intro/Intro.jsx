import Computer from '../../img/computer.png'
import { AiOutlineArrowDown } from "react-icons/ai";

import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-container">

        <div className="i-header">
          <div className="i-name-header">
            Kevin Kotcherga
          </div>
          <div className="i-desc-header">
            FullStack Node.js, React & Ruby On rails
          </div>
          <div className="i-city-header">
            Basé à Paris
          </div>
          <div className="i-nav-header">
            <ul>
              <li>Projets,</li>
              <li>Profil,</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="i-container-big-desc">
          <h2>DEVELOPPEUR WEB</h2>
        </div>

         <img src={Computer} alt="computer" className='i-img' />

        <div className="i-container-big-name">
          <AiOutlineArrowDown size={200}
          className="arrow" />
          <h1>KEVIN <br/> KOTCHERGA</h1>
        </div>

      </div>
    </div>
  );
};

export default Intro;
