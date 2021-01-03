import {useTheme as useReTheme} from "@shopify/restyle";
import theme, {Theme}           from "./Theme";

export *                   from './Theme';
export *                   from './createStyle';
export {default as Header} from './Header';
export {default as Footer} from './Footer';

export const userTheme = () => useReTheme<Theme>();
export default theme;