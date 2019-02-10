import Typography from "typography";
import kirkham from "typography-theme-kirkham"
kirkham.baseFontSize = '20px';
kirkham.baseLineHeight = 1.55;
kirkham.bodyFontFamily = ['Josefin Sans', 'sans-serif'];
const typography = new Typography(kirkham);


export default (() => {
    typography.injectStyles();
})();
