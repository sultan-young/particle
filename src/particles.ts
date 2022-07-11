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
    radius !: number;
    color !: string;
    strokeStyle !: string;
    shakeEnable = false;
  
    constructor(props: IParcicle) {
  
      // 粒子的横坐标初始位置
      this.x = 0; 
  
      // 粒子的纵坐标初始位置
      this.y = 0;
  
      // 粒子的横向速度
      this.vx = 0;
  
      // 粒子的纵向速度
      this.vy = 0;
  
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
      }
    render(ctx: CanvasRenderingContext2D) {
      let { x, y, radius, color, strokeStyle } = this;
      ctx.save();
      if (this.shakeEnable) {
        x = x + Math.random() * 3;
        y = y + Math.random() * 3;
      }
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.strokeStyle = strokeStyle;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
      return this;
    }
}

export {
  Parcicle,
}