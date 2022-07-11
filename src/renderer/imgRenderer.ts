import { IBaseInitializeOptions, Render } from "./baseRender";

interface ImgInitializeOptions extends IBaseInitializeOptions{

}


export class ImgRenderer extends Render{
    imageEl !: HTMLImageElement;
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
        ctx.drawImage(this.imageEl, 0, 0, 300, 300)
        this._initCanvasData(canvas);
    }
    
}