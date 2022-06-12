let cells = document.getElementsByClassName('guide-cell');
let guideIndex = document.getElementById('guide-index');
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseenter', () => {
            guideIndex.style.display = "none";
            let topGuide = document.getElementById('top-' + cells[i].id);
            topGuide.style.display = "block";
    });
    cells[i].addEventListener('mouseleave', () => {
            guideIndex.style.display = "block";
            let topGuide = document.getElementById('top-' + cells[i].id);
            topGuide.style.display = "none";
    });
}