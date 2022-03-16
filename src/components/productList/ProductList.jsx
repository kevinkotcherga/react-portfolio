import './productList.scss'
import Product from "./../product/Product"
import { productReacts } from '../../data'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ProductList = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 data-aos='fade-up' className="pl-title">CREATION <br/> NODE.JS & REACT</h1>
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div data-aos='fade-up' className="pl-list">
        { productReacts.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
