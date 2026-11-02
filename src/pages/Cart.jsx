import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>السلة فاضية 🛒</h2>
        <Link to="/products" className="cart-btn">ابدأي التسوق</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>سلة المشتريات</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                حذف
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>ملخص الطلب</h2>
          <div className="summary-row">
            <span>المجموع</span>
            <strong>${total}</strong>
          </div>
          <Link to="/checkout" className="cart-btn">إتمام الشراء</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
