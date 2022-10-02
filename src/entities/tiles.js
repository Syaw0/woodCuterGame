import tilesImage from '../assets/tiles.png';

class Tiles {
  constructor(ctx, cWidth, cHeight) {
    this.ctx = ctx;
    this.cHeight = cHeight;
    this.cWidth = cWidth;
    this.image = new Image();
    this.image.src = tilesImage;
    this.imageSizes = {
      w: this.image.width,
      h: this.image.height,
    };
    this.sHeight = this.cHeight - this.imageSizes.h - 30;
    this.sWidth = 0;
  }

  draw() {
    for (let i = 0; i !== Math.ceil(this.cWidth / this.imageSizes.w); i += 1) {
      this.ctx.save();
      this.ctx.drawImage(this.image, i * this.imageSizes.w, this.cHeight - this.sHeight);
      this.ctx.restore();
    }
  }
}

export default Tiles;
