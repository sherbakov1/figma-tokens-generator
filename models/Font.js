module.exports = class Font {
  constructor({ name, style }) {
    this.name = name;
    this.fontFamily = style.fontFamily;
    this.fontWeight = style.fontWeight;
    this.fontSize = style.fontSize;
    this.lineHeightPercent = style.lineHeightPercent;
  }

  get token() {
    return `--${this.name}: ${this.fontWeight} ${this.fontSize}/${
      this.lineHeightPercent
    } ${this.fontFamily};`;
  }
};
