function showSection(id) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(section => {
        section.classList.add('hidden');
    });

    const active = document.getElementById(id);
    if (active) {
        active.classList.remove('hidden');
    }
}
