import { Link } from 'react-router-dom'
import './product.scss'

const Product = ({img, projectId}) => {
  return (
    <div className='p'>
      <Link to={`/project/${projectId}`}>
        <img src={img} alt="" className='p-img'/>
      </Link>
    </div>
  )
}

export default Product
