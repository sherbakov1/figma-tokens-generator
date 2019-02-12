module.exports = class Color {
  constructor({ name, fills }) {
    this.name = name;
    this.opacity = fills[0].opacity || 1;
    this.color = {
      r: this._convertFigmaColorToRGB(fills[0].color.r),
      g: this._convertFigmaColorToRGB(fills[0].color.g),
      b: this._convertFigmaColorToRGB(fills[0].color.b),
      a: this.opacity
    };
  }

  _convertFigmaColorToRGB(value) {
    return Math.ceil(value * 255);
  }

  get _rgbaColorValue() {
    const { r, g, b, a } = this.color;
    return `rgba(${r},${g},${b},${a});`;
  }

  get token() {
    return `--${this.name}: ${this._rgbaColorValue}`;
  }
};
