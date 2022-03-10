import './productList.css'
import Product from "./../product/Product"

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Création et inspiration</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius sint recusandae, nostrum cumque sequi vero dolores, adipisci eos hic modi iusto magni officia libero! Quam error nemo libero laudantium!
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
