import Particle, { Emiter } from "./src/core";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const WIDTH = 800;
const HEIGHT = 400;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = '1px solid #000'


if (canvas) {
    const particleManager = new Particle(canvas);
    const textRender = new Particle.TextRenderer('SULTAN');
    textRender.addInitialize({
        skip: 5,
        color: '#2EA9DF',
        shakeEnable: true,
        radius: 1,
        animateEnabled: true,
        fontSize: '50px',
        x: 100,
        y: 100,
    })
    particleManager.addRenderer(textRender);
    particleManager.render();

    // const img = document.createElement('img') as HTMLImageElement;
    // img.src = 'https://unbug.github.io/codelf/images/zhifubao.70c19370.png';
    // img.setAttribute('crossOrigin', '');
    
    // img.onload = () => {

    //     const particleManager = new Particle(canvas);
    //     const imgRender = new Particle.ImgRenderer(img);
    //     imgRender.addInitialize({
    //         skip: 3,
    //         // color: '#2EA9DF',
    //         shakeEnable: false,
    //         radius: 1,
    //         animateEnabled: true,
    //     })
    //     particleManager.addRenderer(imgRender);
    //     particleManager.render();
    // }
}
