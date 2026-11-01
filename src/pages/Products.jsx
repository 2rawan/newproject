import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'clothes', label: 'ملابس' },
  { id: 'shoes', label: 'أحذية' },
  { id: 'electronics', label: 'إلكترونيات' },
]

function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory
    const matchSearch = product.name.includes(search)
    return matchCategory && matchSearch
  })

  return (
    <div className="products-page">
      <h1>المنتجات</h1>

      <input
        type="text"
        className="search-input"
        placeholder="ابحثي عن منتج..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products