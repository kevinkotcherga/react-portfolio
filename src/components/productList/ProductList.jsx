import './productList.scss'
import Product from "./../product/Product"
import { productReacts } from '../../data'

export const ProductList = () => {

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-anchorPlacement='top' className="pl-title">CREATION <br/> NODE.JS & REACT</h1>
      </div>
      <div className="pl-list" data-aos='fade-up' data-aos-duration="1500" data-aos-offset="-200">
        { productReacts.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
