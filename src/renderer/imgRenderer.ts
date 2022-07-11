import { IBaseInitializeOptions, Render } from "./baseRender";

interface ImgInitializeOptions extends IBaseInitializeOptions{
    width: number;
    height: number;
}


export class ImgRenderer extends Render{
    imageEl !: HTMLImageElement;
    width !: number;
    height !: number;

    constructor(imageEl: HTMLImageElement) {
        super();
        this.imageEl = imageEl;
    }

    // 初始化设置
    addInitialize(options: ImgInitializeOptions) {
        Object.assign(this, options);
    }

    initCanvasData(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(this.imageEl, this.x, this.y, this.width, this.height)
        this._initCanvasData(canvas);
    }
    
}