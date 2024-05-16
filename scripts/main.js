// Obtenha o elemento canvas do HTML
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define as dimensões do canvas
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight;

// Defina o raio do círculo
const raio = 70;

let numPontos = 3;
let translateX = 0;
let translateY = 0;
let scaleX = 1;
let scaleY = 1;
let rotation = 0;

function drawCircle() {
	// Limpe o canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Comece o caminho do desenho
	ctx.beginPath();

	// Calcule o ponto central do círculo
	const centerX = canvas.width / 2 + translateX;
	const centerY = canvas.height / 2 + translateY;

	// Desenhe os pontos do círculo aplicando todas as transformações em torno do ponto central
	for (let i = 0; i < numPontos; i++) {
		const angulo = ((i / numPontos) * 2 * Math.PI) + rotation;

		// Calcule as coordenadas do ponto antes de aplicar qualquer transformação
		let x = raio * Math.cos(angulo);
		let y = raio * Math.sin(angulo);

		// Aplicar escala
		x *= scaleX;
		y *= scaleY;

		// Aplicar rotação em torno do ponto central
		const rotatedX = centerX + (x * Math.cos(rotation) - y * Math.sin(rotation));
		const rotatedY = centerY + (x * Math.sin(rotation) + y * Math.cos(rotation));

		if (i === 0) {
			ctx.moveTo(rotatedX, rotatedY);
		} else {
			ctx.lineTo(rotatedX, rotatedY);
		}
	}

	// Feche o caminho
	ctx.closePath();

	// Preencha o círculo
	ctx.fillStyle = "lightblue";
	ctx.fill();

	// Desenhe o círculo
	ctx.strokeStyle = "blue";
	ctx.stroke();
}

drawCircle();
