import './productListRails.scss'
import Product from "../product/Product"
import { productRails } from '../../data'

export const ProductListRails = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 data-aos='fade-up' data-aos-duration="1500" className="pl-title" data-aos-offset="100">CREATION RUBY ON RAILS & REACT</h1>
        {/* <img src={cassette} alt="" /> */}
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div className="pl-list" data-aos='fade-up' data-aos-duration="1500" data-aos-offset="-700">
        { productRails.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
