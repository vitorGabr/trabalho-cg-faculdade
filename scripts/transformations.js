// Adicione um evento de input ao elemento de entrada de pontos
const range = document.getElementById("point");

range.addEventListener("input", () => {
	numPontos = range.value;
	drawCircle();
});

// Adicione um evento de input ao elemento de entrada de tradução

const translateInput = document.getElementById("translate");

translateInput.addEventListener("input", () => {
	translateX = Number.parseInt(translateInput.value);
	drawCircle();
});


// Adicione um evento de input ao elemento de entrada de escala

const scaleInput = document.getElementById("scale");

scaleInput.addEventListener("input", () => {
	scaleX = Number.parseFloat(scaleInput.value);
	scaleY = Number.parseFloat(scaleInput.value);
	drawCircle();
});


// Adicione um evento de input ao elemento de entrada de rotação

const rotateInput = document.getElementById("rotate");

rotateInput.addEventListener("input", () => {
	rotation = Number.parseInt(rotateInput.value) * (Math.PI / 180);
	drawCircle();
})

// Adicione um evento de input ao elemento de entrada de cisalhamento

const shearInput = document.getElementById("shear");

shearInput.addEventListener("input", () => {
	shearX = Number.parseInt(shearInput.value);
	drawCircle();
})