interface IParcicle {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  finalX?: number;
  finalY?: number;
  radius?: number;
  color?: string;
  strokeStyle?: string;
  shakeEnable?: boolean;
}

class Parcicle {
  // 粒子的横坐标当前位置
  x = 0;
  // 粒子的纵坐标当前位置
  y = 0;

  // 粒子当前帧x坐标偏移
  offsetX = 0;

  // 粒子当前帧y坐标偏移
  offsetY = 0;

  // 粒子的横向速度, 单位 px / s
  vx = 100;

  // 粒子的纵向速度, 单位 px / s
  vy = 100;

  // 粒子的运动终点横坐标
  finalX = 0;

  // 粒子的运动终点纵坐标
  finalY = 0;

  // 粒子的半径
  radius = 1;

  // 渲染半径
  dynamicRadius = 1;

  // 粒子的填充颜色
  color = "#000";

  // 粒子的描边颜色
  strokeStyle = "#000";

  constructor(props: IParcicle) {
    Object.assign(this, props);
    this.dynamicRadius = this.radius;
  }
  update(timeChunk: number) {
    // 让粒子的半径随着时间的变化缩放
    // this.dynamicRadius = 3 + 2 * Math.sin(Date.now() / 1000 % 1000 * this.radius);
    // if (this.x !== this.finalX) {
    //   const distance = (timeChunk / 1000) * this.vx;
    //   if (this.x > this.finalX) {
    //     this.x -= distance;
    //   } else {
    //     this.x += distance;
    //   }
    //   if (Math.abs(this.x - this.finalX) < distance) {
    //     this.x = this.finalX
    //   }
    // }
    // if (this.y !== this.finalY) {
    //   const distance = (timeChunk / 1000) * this.vy;
    //   if (this.y > this.finalY) {
    //     this.y -= distance;
    //   } else {
    //     this.y += distance;
    //   }
    //   if (Math.abs(this.y - this.finalY) < distance) {
    //     this.y = this.finalY;
    //   }
    // }
  }
  render(ctx: CanvasRenderingContext2D) {
    const { x, y, offsetX, offsetY, radius, color, strokeStyle } = this;
    ctx.save();
    ctx.translate(x + offsetX, y + offsetY);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, this.dynamicRadius, 0, 2 * Math.PI);
    // ctx.strokeStyle = strokeStyle;
    // ctx.stroke();
    ctx.fill();
    ctx.restore();
    return this;
  }
}

export { Parcicle };
