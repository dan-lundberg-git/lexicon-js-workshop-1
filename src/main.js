// main.js

// 1. Initialize State
let cart = []

// 2. Select DOM Elements
const productGrid = document.getElementById('product-grid')
const searchInput = document.getElementById('search-input')
const cartCount = document.getElementById('cart-count')
const categoryFilters = document.querySelectorAll('.category-filter')

// 3. Render Products Function
function renderProducts(productsToRender) {
  if (!productGrid) return

  productGrid.innerHTML = productsToRender.map(product => `
    <article class="group rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg">
      <div class="overflow-hidden rounded-lg bg-slate-100">
        <img src="${ product.image }" alt="${ product.name }" class="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div class="space-y-1 px-1 pb-2 pt-4">
        <p class="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">${ product.category }</p>
        <h2 class="text-sm font-bold text-slate-900">${ product.name }</h2>
        <p class="text-[11px] font-medium text-slate-500">${ product.availability }</p>
        <p class="pt-3 text-lg font-black text-slate-900">${ product.price.toLocaleString('sv-SE') } kr</p>
      </div>
    </article>
  `).join('')
}

// 4. Add to Cart Function
function addToCart(productId) {
  // TODO: Find product by id
  // TODO: Add to cart array
  // TODO: Update cart count UI
  // TODO: Save to localStorage
}

// 5. Update Cart Count UI
function updateCartCount() {
  // TODO: Set textContent of cartCount
  // TODO: Show/hide cartCount based on items
}

function applyFilters() {
  const searchTerm = searchInput?.value.trim().toLowerCase() || ''
  const selectedCategories = Array.from(categoryFilters)
    .filter(categoryFilter => categoryFilter.checked && categoryFilter.value !== 'all')
    .map(categoryFilter => categoryFilter.value)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const searchableText = product.name.toLowerCase()

    return matchesCategory && searchableText.includes(searchTerm)
  })

  renderProducts(filteredProducts)
}

// 6. Event Listeners
// Search
if (searchInput) {
  searchInput.addEventListener('input', () => {
    applyFilters()
  })
}

// Category Filters
categoryFilters.forEach(filter => {
  filter.addEventListener('change', () => {
    const allProductsFilter = Array.from(categoryFilters).find(categoryFilter => categoryFilter.value === 'all')

    if (filter.value === 'all' && filter.checked) {
      categoryFilters.forEach(categoryFilter => {
        if (categoryFilter.value !== 'all') categoryFilter.checked = false
      })
    } else if (filter.value !== 'all' && filter.checked && allProductsFilter) {
      allProductsFilter.checked = false
    }

    const hasSelectedCategories = Array.from(categoryFilters)
      .some(categoryFilter => categoryFilter.checked && categoryFilter.value !== 'all')

    if (!hasSelectedCategories && allProductsFilter) {
      allProductsFilter.checked = true
    }

    applyFilters()
  })
})

// 7. Initial Load
document.addEventListener('DOMContentLoaded', () => {
  // TODO: Load cart from localStorage
  // TODO: Update cart count UI
  // TODO: Render all products initially
  applyFilters()
})
