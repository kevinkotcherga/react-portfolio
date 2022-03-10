import './about.css'
import Me2 from "../../img/me2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me2}
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A propos de moi</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus deleniti consequatur culpa, animi placeat, beatae voluptate quibusdam ipsum iusto quo accusantium. Nemo natus accusantium cupiditate, explicabo fugit dolor temporibus.</p>
        <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora a laborum? Officiis doloremque a error distinctio blanditiis, reiciendis eaque praesentium cumque doloribus magni, facilis accusamus libero est quos consequatur.</p>
      </div>
    </div>
  )
}

export default About
