import {createBox, createText, useTheme as useReTheme} from "@shopify/restyle";
import {Theme}                                         from "./Theme";

export * from './Theme';

export const Text      = createText<Theme>();
export const Box       = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

import theme from "./Theme";


export default theme;