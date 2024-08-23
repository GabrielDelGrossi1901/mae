document.getElementById('surprise-btn').addEventListener('click', function() {
    const message = document.getElementById('surprise-message');
    const image = document.getElementById('surprise-image');
    
    message.classList.toggle('hidden');
    image.classList.toggle('hidden');
    
    setTimeout(() => {
        const visible = !message.classList.contains('hidden');
        message.style.opacity = visible ? '1' : '0';
        image.style.opacity = visible ? '1' : '0';
    }, 10);
});
