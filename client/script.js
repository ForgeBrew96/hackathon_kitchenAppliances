const search = document.querySelector('.search-button')
const input = document.getElementById('input')
const productName = document.getElementById('productName'); 
const productImg = document.getElementById('productImg'); 
const productPrice = document.getElementById('productPrice'); 

const getKitchenProducts = async () => {
    try {
        const response = await fetch('http://localhost:3001/products');
        const products = await response.json();
        console.log(products)
        return products
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

getKitchenProducts();

search.addEventListener('click', async () => {
    const products = await getKitchenProducts();
    const searchQuery = input.value.toLowerCase();
    
    const foundProduct = products.find(product => product.name.toLowerCase() === searchQuery);
    
    if (foundProduct) {
        productName.textContent = foundProduct.name;
        productImg.src = foundProduct.image
        productPrice.textContent = `$${foundProduct.priceUSD}`
    } else {
        productName.textContent = 'Product not found';
    }
})