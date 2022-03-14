import './productListRails.scss'
import Product from "../product/Product"
import { productRails } from '../../data'
import cassette from '../../img/casette.png'

export const ProductListRails = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="plr-title">CREATION <br/> RUBY ON <br/>RAILS</h1>
        <img src={cassette} alt="" />
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p> */}
      </div>
      <div className="pl-list">
        { productRails.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}
