import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button>أضف للسلة</button>
      </div>
    </div>
  )
}

export default ProductCard