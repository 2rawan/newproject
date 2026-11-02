import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

function Checkout() {
  const { cartItems, total, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page checkout-success">
        <h1>✅ تم استلام طلبك</h1>
        <p>شكراً {form.name}، رح نتواصل معك قريباً على رقم {form.phone}.</p>
        <Link to="/" className="checkout-btn">العودة للرئيسية</Link>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page checkout-success">
        <h2>السلة فاضية</h2>
        <Link to="/products" className="checkout-btn">ابدأي التسوق</Link>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h1>إتمام الشراء</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>معلومات التوصيل</h2>

          <label>الاسم الكامل</label>
          <input name="name" value={form.name} onChange={handleChange} required />

          <label>رقم الهاتف</label>
          <input name="phone" value={form.phone} onChange={handleChange} required />

          <label>المدينة</label>
          <input name="city" value={form.city} onChange={handleChange} required />

          <label>العنوان</label>
          <textarea name="address" value={form.address} onChange={handleChange} required />

          <p className="payment-note">طريقة الدفع: الدفع عند الاستلام</p>

          <button type="submit" className="checkout-btn">تأكيد الطلب</button>
        </form>

        <div className="checkout-summary">
          <h2>ملخص الطلب</h2>
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="checkout-total">
            <span>المجموع</span>
            <strong>${total}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout