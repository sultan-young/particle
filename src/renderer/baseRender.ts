import { BaseBehaviour } from "../behaviour/base";
import { Parcicle } from "../particles";

export interface IBaseInitializeOptions {
  skip?: number;
  color?: string;
  radius?: number;
  animateEnabled?: boolean;
  x?: number;
  y?: number;
}

export abstract class Render {
  protected skip = 5;
  protected radius = 1;
  protected shakeEnable = false;
  protected color = "";
  protected x = 0;
  protected y = 0;
  protected particles: Array<Parcicle> = [];
  public animateEnabled = false;

  // 当前粒子行为
  private behaviours: Array<BaseBehaviour> = [];

  constructor() {}
  abstract addInitialize(options: any): void;
  abstract initCanvasData(canvas: HTMLCanvasElement): void;

  addBehaviour(behaviour: BaseBehaviour) {
    this.behaviours.push(behaviour);
  }

  _initCanvasData(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height).data;
    for (let y = 0; y < height; y += this.skip) {
      for (let x = 0; x < width; x += this.skip) {
        // 计算出当前像素点透明度在 imgData 中的指针位置
        const pointIndex = (x + y * width) * 4;
        const r = imgData[pointIndex];
        const g = imgData[pointIndex + 1];
        const b = imgData[pointIndex + 2];
        const a = imgData[pointIndex + 3];
        if (a > 0) {
          this.particles.push(
            new Parcicle({
              x,
              y,
              radius: this.radius,
              shakeEnable: this.shakeEnable,
              color: this.color || `rgba(${r}, ${g}, ${b}, ${a})`,
            })
          );
        }
      }
    }
    ctx.clearRect(0, 0, width, height);
  }

  render(ctx: CanvasRenderingContext2D, timeChunk?: number) {
    this.behaviours.forEach((item) => {
      item.update(this.particles);
    });
    this.particles.forEach((item) => {
      if (this.animateEnabled && timeChunk) {
        item.update(timeChunk);
      }
      item.render(ctx);
    });
  }
}
