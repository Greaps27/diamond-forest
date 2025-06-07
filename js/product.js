// Sample product data - in a real app, this would come from an API
const products = [
    {
        id: 1,
        name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
        price: 2995,
        image: "../images/tennis-bracelet-1.jpg",
        category: "tennis"
    },
    {
        id: 2,
        name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
        price: 2995,
        image: "../images/tennis-bracelet-2.jpg",
        category: "tennis"
    },
    {
        id: 3,
        name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
        price: 7000,
        image: "../images/olivetta-bracelet.jpg",
        category: "tennis"
    },
    {
        id: 4,
        name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)",
        price: 3595,
        image: "../images/azura-bracelet-main.jpg",
        category: "statement"
    },
    {
        id: 5,
        name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
        price: 2995,
        image: "../images/tennis-bracelet-3.jpg",
        category: "tennis"
    },
    {
        id: 6,
        name: "Round Lab Diamond Tennis Bracelet (3 ct. tw.)",
        price: 2995,
        image: "../images/tennis-bracelet-4.jpg",
        category: "tennis"
    },
    {
        id: 7,
        name: "Olivetta Lab Diamond Tennis Bracelet (2 3/4 ct. tw.)",
        price: 7000,
        image: "../images/olivetta-bracelet-2.jpg",
        category: "tennis"
    },
    {
        id: 8,
        name: "Azura Sapphire and Diamond Bracelet (1/2 ct. tw.)",
        price: 3595,
        image: "../images/azura-bracelet-2.jpg",
        category: "statement"
    }
];

// Function to display products
function displayProducts(productsToShow) {
    const grid = document.querySelector('.product-grid .grid');
    grid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toLocaleString()}</div>
            <a href="../product-details/${product.id}.html" class="btn-secondary">VIEW DETAILS</a>
        `;
        grid.appendChild(productElement);
    });
}

// Initialize the page with all products
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    
    // Filter functionality
    document.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('active');
            filterProducts();
        });
    });
    
    // Sort functionality
    document.querySelector('.sort-options select').addEventListener('change', function() {
        sortProducts(this.value);
    });
});

// Filter products based on selected filters
function filterProducts() {
    const activeFilters = {
        style: [],
        occasion: [],
        metal: []
    };
    
    document.querySelectorAll('.filter-option.active').forEach(option => {
        const section = option.parentElement.parentElement.querySelector('h3').textContent;
        if (section === 'STYLE') activeFilters.style.push(option.textContent);
        if (section === 'OCCASION') activeFilters.occasion.push(option.textContent);
        if (section === 'METAL TYPE') activeFilters.metal.push(option.textContent);
    });
    
    // In a real app, you would filter based on actual product attributes
    // For now, we'll just return all products if no filters are active
    const anyFilters = activeFilters.style.length > 0 || activeFilters.occasion.length > 0 || activeFilters.metal.length > 0;
    
    if (!anyFilters) {
        displayProducts(products);
        return;
    }
    
    // Simple filtering for demonstration
    let filteredProducts = products;
    
    if (activeFilters.style.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return activeFilters.style.some(style => 
                product.name.toLowerCase().includes(style.toLowerCase().split(' ')[0])
            );
        });
    }
    
    displayProducts(filteredProducts);
}

// Sort products
function sortProducts(criteria) {
    let sortedProducts = [...products];
    
    switch(criteria) {
        case 'Price: Low to High':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'Price: High to Low':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'Newest':
            // Assuming newer products have higher IDs
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Default sorting (most popular)
            break;
    }
    
    displayProducts(sortedProducts);
}