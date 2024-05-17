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
let shearX = 0;
let shearY = 0;

function drawCircle() {
    // Limpe o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Salva o estado atual do contexto
    ctx.save();

    // Translade para o ponto central do canvas com a translação aplicada
    const centerX = canvas.width / 2 + translateX;
    const centerY = canvas.height / 2 + translateY;
    ctx.translate(centerX, centerY);

    // Aplica a rotação ao contexto
    ctx.rotate(rotation);

    // Aplica a escala ao contexto
    ctx.scale(scaleX, scaleY);

    // Aplica o cisalhamento ao contexto (shear)
    ctx.transform(1, shearY, shearX, 1, 0, 0);

    // Comece o caminho do desenho
    ctx.beginPath();

    // Desenhe os pontos do círculo no espaço transformado
    for (let i = 0; i < numPontos; i++) {
        const angulo = (i / numPontos) * 2 * Math.PI;

        // Calcule as coordenadas do ponto no círculo unitário
        const x = raio * Math.cos(angulo);
        const y = raio * Math.sin(angulo);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
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

    // Restaura o estado do contexto para o original (antes das transformações)
    ctx.restore();
}

drawCircle();
