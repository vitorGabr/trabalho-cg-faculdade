window.addEventListener('keydown', function(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            translateY -= 10;
            break;
        case 'ArrowDown':
            translateY += 10;
            break;
        case 'ArrowLeft':
            translateX -= 10;
            break;
        case 'ArrowRight':
            translateX += 10;
            break;
        case 'r':
            rotation += 0.1;
            break;
        case 'R':
            rotation -= 0.1;
            break;
    }
    drawCircle();
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    numPontos = 3;
    translateX = 0;
    translateY = 0;
    scaleX = 1;
    scaleY = 1;
    rotation = 0;

    translateInput.value = 0;
    range.value = 3;
    scaleInput.value = 1;
    rotateInput.value = 0;

    drawCircle();
});


window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	drawCircle();
});
