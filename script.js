document.getElementById('shopNow').addEventListener('click', function() {
    alert('Shop Now button clicked!');
});

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});
