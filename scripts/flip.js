function scrollCards(direction) {
    const container = document.querySelector('.card-list');
    const scrollAmount = direction * (window.innerWidth); // Scroll by one container width
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}