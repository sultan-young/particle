import { ShakeBehaviour } from "./src/behaviour/shake";
import { SpreadBehaviour } from "./src/behaviour/spread";
import { WriggleBehaviour } from "./src/behaviour/wriggle";
import Particle, { Emiter } from "./src/core";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const WIDTH = 400;
const HEIGHT = 400;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = '1px solid #000'


if (canvas) {
    const particleManager = new Particle(canvas);
    const textRender = new Particle.TextRenderer('SULTAN');
    textRender.addInitialize({
        skip: 2,
        color: 'red',
        radius: 1,
        animateEnabled: true,
        fontSize: '50px',
        x: 100,
        y: 100,
    })
    // textRender.addBehaviour(new ShakeBehaviour(1));
    // textRender.addBehaviour(new WriggleBehaviour());
    textRender.addBehaviour(new SpreadBehaviour())
    particleManager.addRenderer(textRender);

    particleManager.render();

    // const img = document.createElement('img') as HTMLImageElement;
    // img.src = 'https://unbug.github.io/codelf/images/zhifubao.70c19370.png';
    // img.setAttribute('crossOrigin', '');
    
    // img.onload = () => {
    //     const particleManager = new Particle(canvas);
    //     const imgRender = new Particle.ImgRenderer(img);
    //     imgRender.addBehaviour(new WriggleBehaviour());
    //     imgRender.addInitialize({
    //         width: WIDTH,
    //         height: HEIGHT,
    //         skip: 5,
    //         // color: '#2EA9DF',
    //         radius: 1,
    //         animateEnabled: true,
    //     })
    //     particleManager.addRenderer(imgRender);
    //     particleManager.render();
    // }
}
