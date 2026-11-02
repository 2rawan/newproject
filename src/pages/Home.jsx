import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import './Home.css'

const categories = [
  { id: 'clothes', label: 'ملابس', icon: '👕' },
  { id: 'shoes', label: 'أحذية', icon: '👟' },
  { id: 'electronics', label: 'إلكترونيات', icon: '🎧' },
]

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>أحدث الصيحات بأسعار لا تُقاوم</h1>
          <p>ملابس، أحذية، وإلكترونيات في مكان واحد</p>
          <Link to="/products" className="hero-btn">تسوقي الآن</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">تسوقي حسب الفئة</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link to="/products" key={cat.id} className="category-tile">
              <span className="category-icon">{cat.icon}</span>
              <span className="category-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">منتجات مميزة</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home