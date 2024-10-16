const getKitchenProducts = async () => {
    try {
        const response = await fetch('http://localhost:3001/products');
        const products = await response.json();
        console.log(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

getKitchenProducts();

