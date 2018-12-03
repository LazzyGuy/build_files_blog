import Typography from "typography";
import kirkham from "typography-theme-kirkham"
kirkham.baseFontSize = '18px';
kirkham.baseLineHeight = 1.3;
kirkham.bodyFontFamily = ['Josefin Sans', 'sans-serif'];
const typography = new Typography(kirkham);


export default (() => {
    typography.injectStyles();
})();
