import { Parcicle, IParcicle } from './particles';

interface IParticleSystem {
    container: HTMLCanvasElement,
    text: string,
    options?: IOptions,
}
interface IOptions {
    skip: number;
}

class ParticleSystem {
    // 容器canvas
    container!: HTMLCanvasElement;
    // 容器canvasCtx
    containerCtx!: CanvasRenderingContext2D;

    // 离屏canvas
    offScreenCanvas !: HTMLCanvasElement;
    offScreenCanvasCtx !: CanvasRenderingContext2D;

    particles : Array<Parcicle> = [];

    text = 'Sultan';
    skip = 5;

    constructor(cons: IParticleSystem) {
        const { container, text, options } = cons;
        this.text = text;
        this.skip = options!.skip || 5;
        this.initContainerCanvas(container);
        this.initOffScreenCanvas();
        this.initImageData();
    }

    initContainerCanvas(canvas: HTMLCanvasElement) {
        this.container = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('请传入正确的canvas');
        }
        this.containerCtx = ctx;
    }

    initOffScreenCanvas() {
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

    initImageData() {
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
                        x: x + Math.random() * 6 - 3,
                        y: y + Math.random() * 6 - 3,
                        radius: 1,
                        color: '#2EA9DF',
                    }))
                }
            }
        };
        ctx.clearRect(0, 0, width, height);
    }

    draw() {
        const ctx = this.containerCtx;
        console.log(this.particles)
        this.particles.forEach(item => {
            item.render(ctx);
        })
    }
    
}

class Emiter {

}

export default ParticleSystem;
export {
    Emiter,
}