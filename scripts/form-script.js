document.addEventListener('DOMContentLoaded', () => {
    const productArray = [
        { id: 'fc-1888', name: 'flux capacitor' },
        { id: 'fc-2050', name: 'power laces' },
        { id: 'fs-1987', name: 'time circuits' },
        { id: 'ac-2000', name: 'low voltage reactor' },
        { id: 'jj-1969', name: 'warp equalizer' }
    ];

    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        productArray.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    } else {
        console.error('Element with id "productName" not found.');
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    } else {
        console.error('Element with id "lastModified" not found.');
    }

    let reviewCount: string | null = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = '0';
    }
    let reviewCountNumber: number = parseInt(reviewCount);
    localStorage.setItem('reviewCount', (reviewCountNumber + 1).toString());
});