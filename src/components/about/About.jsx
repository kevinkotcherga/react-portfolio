import './about.css'
import window from "../../img/window.png";

const About = () => {
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
        <h1 className="a-title">A PROPOS DE MOI</h1>
        <p className="a-sub">Il y a quelques mois j'ai découvert les joies du code.</p>
        <p className="a-desc">Je me suis reconverti en Développeur Fullstack Ruby on Rails grâce au bootcamp de 9 semaines du Wagon.</p>
        <p className="a-desc-bottom">Aujourd'hui je parfaire mes compétences et me spéciale dans Node.js et React.</p>
      </div>
    </div>
  )
}

export default About
