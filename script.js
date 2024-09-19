document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const cart = [];
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartSummary = document.getElementById('cart-summary');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and the corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cart = {
        items: [],
        total: 0,
        addItem: function(name, price) {
            this.items.push({ name, price: parseFloat(price) }); // Asegurarse de que el precio es un número
            this.updateCart();
        },
        updateCart: function() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            cartItems.innerHTML = ''; // Limpiar los items anteriores
            this.total = 0; // Resetear el total

            this.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price.toFixed(3)}`; // Mostrar el precio con 3 decimales
                cartItems.appendChild(li);
                this.total += item.price;
            });

            cartTotal.textContent = this.total.toFixed(3); // Mostrar el total con 3 decimales
        }
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            cart.addItem(name, price);
        });
    });

    document.getElementById('show-cart').addEventListener('click', function() {
        const cartElement = document.getElementById('cart');
        cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
    });
});