document.addEventListener("DOMContentLoaded", function(){
    const faqIcons = document.querySelectorAll('.faq__icon');
    const cellTooltips = document.querySelectorAll('.cell-tooltip');

    faqIcons.forEach((faqIcon, index) => {
        faqIcon.addEventListener('mouseover', function() {
            cellTooltips[index].style.display = 'block';
            cellTooltips[index].style.maxWidth = '260px';
            cellTooltips[index].style.borderRadius = '10px';
            cellTooltips[index].style.color = '#fff';
            cellTooltips[index].style.background = '#000';
            cellTooltips[index].style.opacity = '.8';
            cellTooltips[index].style.position = 'absolute';
            cellTooltips[index].style.padding = '15px';
            cellTooltips[index].style.boxShadow = '0 0 10px rgba(0,0,0,.1)';
        });

        faqIcon.addEventListener('mouseout', function() {
            cellTooltips[index].style.display = 'none';
        });
    });
});