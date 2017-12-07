
class Line {
  constructor(props){
    this.x = 0;
    this.y = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.rotation = 0;
    this.strokeStyle = '#000';
    this.lineWidth = 1;
    Object.assign(this, props);
    return this;
  }
  render(ctx){
    let {x, y, x1, y1, x2, y2, rotation, lineWidth, strokeStyle} = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
    return this;
  }
}