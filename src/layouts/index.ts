import {useTheme as useReTheme} from "@shopify/restyle";
import theme, {Theme}           from "./Theme";

export * from './Theme';
export * from './Header';
export * from './Footer';

export const userTheme = () => useReTheme<Theme>();
export default theme;