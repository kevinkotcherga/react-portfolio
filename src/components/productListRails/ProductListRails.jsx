import './productListRails.css'
import Product from "../product/Product"
import { products } from '../../data'

export const ProductListRails = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="plr-title">CREATION <br/> RUBY ON <br/>RAILS</h1>
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div className="pl-list">
        { products.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
