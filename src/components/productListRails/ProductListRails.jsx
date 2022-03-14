import './productListRails.scss'
import Product from "../product/Product"
import { productRails } from '../../data'
import cassette from '../../img/casette.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ProductListRails = () => {

  useEffect(() => {
    AOS.init({duration: 1000, delay: 500});
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 data-aos='fade-up' className="plr-title">CREATION <br/> RUBY ON <br/>RAILS</h1>
        {/* <img src={cassette} alt="" /> */}
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div data-aos='fade-up' className="pl-list">
        { productRails.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
