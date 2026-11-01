import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">My Store</Link>

      <ul className="navbar-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/products">المنتجات</Link></li>
        <li><Link to="/cart">السلة</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar