import './productList.scss'
import Product from "./../product/Product"
import { productReacts } from '../../data'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ProductList = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 data-aos='fade-up' className="pl-title">CREATION <br/> NODE.JS & REACT</h1>
      </div>
      <div className="pl-list" data-aos='fade-up'>
        { productReacts.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
