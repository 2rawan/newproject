import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

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
        <button onClick={() => addToCart(product)}>أضف للسلة</button>
      </div>
    </div>
  )
}

export default ProductCard