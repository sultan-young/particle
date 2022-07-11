import { BaseBehaviour } from './behaviour/base';
import { Render } from './renderer/baseRender';
import { ImgRenderer } from './renderer/imgRenderer';
import { TextRenderer } from './renderer/textRenderer';

class Particle {
    // 容器canvas
    private container!: HTMLCanvasElement;
    // 容器canvasCtx
    private containerCtx!: CanvasRenderingContext2D;

    // 离屏canvas
    private offScreenCanvas !: HTMLCanvasElement;
    private offScreenCanvasCtx !: CanvasRenderingContext2D;

    // 渲染器
    private renderer !: Render;


    static TextRenderer = TextRenderer;
    static ImgRenderer = ImgRenderer;

    constructor(container: HTMLCanvasElement) {
        this.initContainerCanvas(container);
        this.initOffScreenCanvas();
    }

    addRenderer(renderer: Render) {
        this.renderer = renderer;
        this.renderer.initCanvasData(this.offScreenCanvas);
    }

    private initContainerCanvas(canvas: HTMLCanvasElement) {
        this.container = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('请传入正确的canvas');
        }
        this.containerCtx = ctx;
    }

    private initOffScreenCanvas() {
        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        // const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        canvas.width = this.container.width;
        canvas.height = this.container.height;
        if (!ctx) {
            throw new Error('render canvas initial fail');
        };
        this.offScreenCanvas = canvas;
        this.offScreenCanvasCtx = ctx;
    }

    render() {
        if (this.renderer.animateEnabled) {
            requestAnimationFrame(this.handlerAnimation.bind(this, 0))
        } else {
            this.renderer.render(this.containerCtx);
        }
    }
    private handlerAnimation(lastRenderTimeStamp: number, currentTimeStamp: number) {
        const timeChunk = currentTimeStamp - lastRenderTimeStamp;
        // if (timeChunk >= 100) {
            console.log(`当前fps: ${1000 / (currentTimeStamp - lastRenderTimeStamp)}`)
            this.containerCtx.clearRect(0, 0, this.container.width, this.container.height)
            this.renderer.render(this.containerCtx, timeChunk);
            lastRenderTimeStamp = currentTimeStamp;
        // }
        requestAnimationFrame(this.handlerAnimation.bind(this, lastRenderTimeStamp));
    }
    
    
}

class Emiter {

}

export default Particle;
export {
    Emiter,
}