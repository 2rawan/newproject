import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetails.css'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="details-page">
        <h2>المنتج غير موجود</h2>
        <Link to="/products">العودة للمنتجات</Link>
      </div>
    )
  }

  return (
    <div className="details-page">
      <Link to="/products" className="back-link">← العودة للمنتجات</Link>

      <div className="details-content">
        <img src={product.image} alt={product.name} />

        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="details-price">${product.price}</p>
          <p className="details-description">{product.description}</p>
          <button onClick={() => addToCart(product)}>أضف للسلة</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails