const gridContainers = document.querySelectorAll('.grid-container');

gridContainers.forEach((gridContainer) => {
    for (let i = 0; i < 250; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
});