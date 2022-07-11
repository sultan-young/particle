interface IParcicle {
    x : number;
    y : number;
    vx ?: number;
    vy ?: number;
    finalX ?: number;
    finalY ?: number;
    radius ?: number;
    color ?: string;
    strokeStyle ?: string;
    shakeEnable ?: boolean;
  }
  
class Parcicle {
    x !: number;
    y !: number;
    vx !: number;
    vy !: number;
    finalX !: number;
    finalY !: number;
    radius !: number; // 初始半径
    dynamicRadius !: number; // 渲染半径
    color !: string;
    strokeStyle !: string;
    shakeEnable = false;
  
    constructor(props: IParcicle) {
  
      // 粒子的横坐标初始位置
      this.x = 0; 
  
      // 粒子的纵坐标初始位置
      this.y = 0;
  
      // 粒子的横向速度, 单位 px / s
      this.vx = 130;
  
      // 粒子的纵向速度, 单位 px / s
      this.vy = 130;
  
      // 粒子的运动终点横坐标
      this.finalX = 0;
  
      // 粒子的运动终点纵坐标
      this.finalY = 0;
  
      // 粒子的半径
      this.radius = 1;
  
      // 粒子的填充颜色
      this.color = '#000';
  
      // 粒子的描边颜色
      this.strokeStyle = '#000';
      
      Object.assign(this, props);
      this.dynamicRadius = this.radius;
    }
    update(timeChunk: number) {
      // 让粒子的半径随着时间的变化缩放
      // this.dynamicRadius = 3 + 2 * Math.sin(Date.now() / 1000 % 1000 * this.radius);
      if (this.x !== this.finalX) {
        const distance = (timeChunk / 1000) * this.vx;
        if (this.x > this.finalX) {
          this.x -= distance;
        } else {
          this.x += distance;
        }
        if (Math.abs(this.x - this.finalX) < distance) {
          this.x = this.finalX
        }
      } 
      if (this.y !== this.finalY) {
        const distance = (timeChunk / 1000) * this.vx;
        if (this.y > this.finalY) {
          this.y -= distance;
        } else {
          this.y += distance;
        }
        if (Math.abs(this.y - this.finalY) < distance) {
          this.y = this.finalY;
        }
      }
    
    }
    render(ctx: CanvasRenderingContext2D) {
      let { x, y, radius, color, strokeStyle } = this;
      ctx.save();
      // if (this.shakeEnable) {
      //   x = x + Math.random() * 3;
      //   y = y + Math.random() * 3;
      // }
      ctx.translate(x, y);
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

export {
  Parcicle,
}