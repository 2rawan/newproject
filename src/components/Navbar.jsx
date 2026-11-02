import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const STORE_NAME = 'Shopora'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="header">
      <div className="announcement">
        شحن مجاني للطلبات فوق $50 | خصم 20% على أول طلب
      </div>

      <div className="header-main">
        <Link to="/" className="logo">{STORE_NAME}</Link>

        <div className="search-box">
          <input type="text" placeholder="ابحثي عن ملابس، أحذية، إلكترونيات..." />
          <button>🔍</button>
        </div>

        <div className="header-icons">
          <Link to="/account" title="حسابي">👤</Link>
          <Link to="/wishlist" title="المفضلة">♡</Link>
          <Link to="/cart" title="السلة" className="cart-link">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <nav className="category-bar">
        <Link to="/">الرئيسية</Link>
        <Link to="/products">كل المنتجات</Link>
        <Link to="/products">ملابس</Link>
        <Link to="/products">أحذية</Link>
        <Link to="/products">إلكترونيات</Link>
        <Link to="/products" className="sale-link">التخفيضات</Link>
      </nav>
    </header>
  )
}

export default Navbar