
class Box {
  constructor(opt){
    this.x = 0;
    this.y = 0;
    this.w = 100;
    this.h = 100;
    this.vx = 0;
    this.vy = 0;
    this.strokeStyle = 'rgba(0, 0, 0, 0)';
    this.fillStyle = 'rgb(57, 119, 224)';
    this.rotation = 0;
    this.lineWidth = 0;
    Object.assign(this, opt);
    return this;
  }
  render(ctx){
    let {x, y, w, h, lineWidth, strokeStyle, fillStyle, rotation, scale} = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    return this;
  }
  isPoint(mouse){
    let {x, y} = mouse;
    return (x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h);
  }
}