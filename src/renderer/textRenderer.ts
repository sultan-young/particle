import { IBaseInitializeOptions, Render } from "./baseRender";

interface TextInitializeOptions extends IBaseInitializeOptions {
  fontSize?: string;
  fontFamily?: string;
}

export class TextRenderer extends Render {
  text = "测试";
  fontSize = "16px";
  fontFamily = "PingFang SC";

  constructor(text: string) {
    super();
    this.text = text;
  }

  // 初始化设置
  addInitialize(options: TextInitializeOptions) {
    Object.assign(this, options);
  }

  initCanvasData(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.font = `${this.fontSize} ${this.fontFamily}`;
    ctx.fillText(this.text, this.x, this.y);
    this._initCanvasData(canvas);
  }
}
