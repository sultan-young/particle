import { Parcicle } from './particles';

interface IParticleSystem {
    container: HTMLCanvasElement,
    text: string,
    options?: IOptions,
}
interface IOptions {
    skip: number;
    shakeEnable: boolean;
}

class ParticleSystem {
    // 容器canvas
    private container!: HTMLCanvasElement;
    // 容器canvasCtx
    private containerCtx!: CanvasRenderingContext2D;

    // 离屏canvas
    private offScreenCanvas !: HTMLCanvasElement;
    private offScreenCanvasCtx !: CanvasRenderingContext2D;

    private particles : Array<Parcicle> = [];

    private text = 'Sultan';
    private skip = 5;

    private lastTimeStamp = 0;

    constructor(cons: IParticleSystem) {
        const { container, text, options } = cons;
        this.text = text;
        this.skip = options!.skip || 5;
        this.initContainerCanvas(container);
        this.initOffScreenCanvas();
        this.initImageData(options!.shakeEnable);
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

    private initImageData(shakeEnable: boolean) {
        const canvas = this.offScreenCanvas;
        const ctx = this.offScreenCanvasCtx;
        const width = canvas.width;
        const height = canvas.height;
        ctx.font = '100px PingFang SC';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, 100, 100);
        const imgData = ctx.getImageData(0, 0, width, height).data;
        const skip = this.skip;
        for (let y = 0; y < height; y += skip) {
            for (let x = 0; x < width; x += skip) {
                // 计算出当前像素点透明度在 imgData 中的指针位置
                const pointIndex = (x + (y * width)) * 4 + 3;
                if (imgData[pointIndex] > 0) {
                    this.particles.push(new Parcicle({
                        x,
                        y,
                        radius: 1,
                        shakeEnable,
                        color: '#2EA9DF',
                    }))
                }
            }
        };
        ctx.clearRect(0, 0, width, height);
    }

    draw() {
        const ctx = this.containerCtx;
        this.particles.forEach(item => {
            item.render(ctx);
        });
        requestAnimationFrame
    }
    animateDraw() {
        requestAnimationFrame(this.handlerAnimation.bind(this))
        console.log(this.particles);
        const ctx = this.containerCtx;
    }
    private handlerAnimation(currentTimeStamp: number) {
        if (currentTimeStamp - this.lastTimeStamp >= 100) {
            this.containerCtx.clearRect(0, 0, this.container.width, this.container.height)
            this.lastTimeStamp = currentTimeStamp;
            this.draw();
        }
        requestAnimationFrame(this.handlerAnimation.bind(this));
    }
}

class Emiter {

}

export default ParticleSystem;
export {
    Emiter,
}