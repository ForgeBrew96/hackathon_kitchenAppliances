const search = document.querySelector('.search-button')
const input = document.getElementById('input')
const productName = document.getElementById('productName');

const getProduct = async (name) => {
    try {
        let response = await axios.get(`mongodb+srv://christianbmendoza96:cometshaddol29@student-cluster.2qeno.mongodb.net/kitchenApplianceDatabase?retryWrites=true&w=majority&appName=student-cluster${name}`)
        const productData = response.data.product

        productName.innerHTML = '';

        if (productData && productData.length > 0) {
            for (let i = 0; i < productData.length; i++) {
                const product = productData[i]

                const productDiv = document.createElement('div')
                productDiv.className = 'product-card'

                const nameElement = document.createElement('h2')
                nameElement.innerHTML = `${product.name}`
                productDiv.appendChild(nameElement)

                const imageElement = document.createElement('img')
                imageElement.src = product.image || 'placeholder-image-url.jpg'
                imageElement.alt = `${product.name} Image`
                productDiv.appendChild(imageElement)

                playerDiv.innerHTML += `
                <p><strong>Price:</strong> ${product.priceUSD || 'N/A'}</p>
                <p><strong>Brand:</strong> ${product.brand || 'N/A'}</p>
                <p><strong>Category:</strong> ${product.category || 'N/A'}</p>
                <p><strong>Type:</strong> ${product.type || 'N/A'}</p>`
                }

                productName.appendChild(productDiv)
            }
                else {
                    productName.innerHTML = 'Product not found.'
                }
            } catch (error) {
                console.error('Error fetching product data:', error)
                productName.innerHTML = 'An error occurred while fetching product data.'
            }
        }

    search.addEventListener('click', () => {
        const productNameInput = input.value.trim()
        if (productNameInput) {
            getProduct(productNameInput)
        } else {
            productName.innerHTML = 'Please enter a product.'
        }
    })
        
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const productNameInput = input.value.trim()
            if (productNameInput) {
                getProduct(productNameInput)
            } else {
                productName.innerHTML = 'Please enter a product.' 
            }
        }
    })
        