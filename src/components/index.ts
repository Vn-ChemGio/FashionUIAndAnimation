import {createBox, createText} from "@shopify/restyle";
import {Theme}                 from "../layouts";

export {default as LoadAsset}         from './LoadAssets'
export {default as Button}            from './Button'
export {default as Container}         from './Container'
export {default as RoundedIcon}       from './RoundedIcon'
export {default as RoundedIconButton} from './RoundedIconButton'

export const Text = createText<Theme>();
export const Box  = createBox<Theme>();
