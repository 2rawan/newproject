import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={`/products/${product.id}`} className="product-name">
          <h3>{product.name}</h3>
        </Link>
        <p className="product-price">${product.price}</p>
        <button>أضف للسلة</button>
      </div>
    </div>
  )
}

export default ProductCard