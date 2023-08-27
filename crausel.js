
const productContainer = document.getElementById('productContainer');
const productList = document.getElementById('productList');

const apiUrl = 'https://api.escuelajs.co/api/v1/products';

// Fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products
function displayProducts(products) {
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('productItem');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productContainer.appendChild(productItem);
    });
}

// Filter products by selected product
function filterProducts(selectedProduct, products) {
    if (selectedProduct === 'all') {
        return products;
    } else {
        return products.filter(product => product.name === selectedProduct);
    }
}

// Event listener for product selection
productList.addEventListener('change', async () => {
    const selectedProduct = productList.value;
    const products = await fetchProducts();
    const filteredProducts = filterProducts(selectedProduct, products);
    displayProducts(filteredProducts);
});

// Initial load
(async function () {
    const initialProducts = await fetchProducts();
    displayProducts(initialProducts);
})();