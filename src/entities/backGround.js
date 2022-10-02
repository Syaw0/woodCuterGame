import backgroundImg from '../assets/Background.png';

class Background {
  constructor(ctx, cWidth, cHeight) {
    this.ctx = ctx;
    this.x = 0;
    this.image = new Image();
    this.image.src = backgroundImg;
    this.cWidth = cWidth;
    this.cHeight = cHeight;
  }

  draw() {
    this.ctx.save();
    this.ctx.drawImage(this.image, 0, 0, this.cWidth, this.cHeight);
    this.ctx.restore();
  }
}

export default Background;
