export default class Draw {
  constructor(canvas_arg) {
    this.canvas = canvas_arg.current;
    this.ctx = this.canvas.getContext("2d");
    this.imgObject = new Image();
    this.imgObject.setAttribute("crossOrigin", "anonymous");
  }
  render(img_arg, func_arg) {
    this.imgObject.src = img_arg;
    this.imgObject.addEventListener("load", () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(
        this.imgObject,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      const colorPalette = this.palette();
      func_arg({
        primary: `rgb(${colorPalette[0].red}, ${colorPalette[0].green}, ${colorPalette[0].blue})`,
        secondary: `rgb(${colorPalette[1].red}, ${colorPalette[1].green}, ${colorPalette[1].blue})`,
        tertiary: `rgb(${colorPalette[2].red}, ${colorPalette[2].green}, ${colorPalette[2].blue})`,
      });
    });
  }
  palette() {
    const quality = 90;
    const colors = [];

    const imgData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ).data;
    for (
      let i = 0;
      i < this.canvas.width * this.canvas.height;
      i = i + quality
    ) {
      const offset = i * 4;
      const alpha = imgData[offset + 3];
      if (alpha > 0) {
        const red = imgData[offset];
        const green = imgData[offset + 1];
        const blue = imgData[offset + 2];
        colors.push({ red, green, blue });
        // console.log("%c Color ", `background: rgba(${red}, ${green}, ${blue})`);
      }
    }
    return colors;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
