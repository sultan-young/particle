import ParticleSystem, {Emiter} from "./src/core";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const WIDTH = 800;
const HEIGHT = 400;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = '1px solid #000'

if (canvas) {
    const particleSystem = new ParticleSystem({
        container: canvas,
        text: '测试',
        options: {
            skip: 3,
            shakeEnable: true,
        }
    });
    // particleSystem.draw();
    particleSystem.animateDraw()
}
