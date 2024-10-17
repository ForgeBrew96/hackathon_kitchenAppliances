const productsContainer = document.getElementById('productsContainer')

const displayProductsGrid = async () => {
    try {
        const response = await fetch('http://localhost:3001/products')
        if (!response.ok) throw new Error('Network response was not ok')
        const products = await response.json()
        productsContainer.innerHTML = ''
        products.forEach(product => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')

            const img = document.createElement('img')
            img.src = product.image
            img.alt = product.name
            productCard.appendChild(img)

            const name = document.createElement('h2')
            name.textContent = product.name
            productCard.appendChild(name)

            const price = document.createElement('p')
            price.textContent = `$${product.priceUSD}`
            productCard.appendChild(price)

            const brand = document.createElement('p')
            brand.textContent = product.brand
            productCard.appendChild(brand)

            productsContainer.appendChild(productCard)
        })
    } catch (error) {
        console.log("Error:", error)
        productsContainer.innerHTML = '<p>Error loading products</p>'
    }
}

window.addEventListener('load', displayProductsGrid)