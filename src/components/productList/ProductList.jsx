import './productList.css'
import Product from "./../product/Product"
import { products } from '../../data'

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">CREATION <br/> NODE.JS & <br/>REACT</h1>
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
