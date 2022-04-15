import './productListRails.scss'
import Product from "../product/Product"
import { productRails } from '../../data'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ProductListRails = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 data-aos='fade-up' className="pl-title">CREATION RUBY ON RAILS & REACT</h1>
        {/* <img src={cassette} alt="" /> */}
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div className="pl-list" data-aos='fade-up'>
        { productRails.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
