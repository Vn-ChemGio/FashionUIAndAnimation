import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const SCREEN_WIDTH  = width;
export const SCREEN_HEIGHT = height;

export const TEXT_INPUT_HEIGHT = height * 0.2;
export const FOOTER_HEIGHT     = 70;

export const LOGIN_VIEW_HEIGHT = TEXT_INPUT_HEIGHT + FOOTER_HEIGHT;

export const MUSIC_BAR_HEIGHT = 120;
export const IMAGE_MUSIC_LARGE = 200;
export const IMAGE_MUSIC_SMALL = 32;

export const SPLASH_SCREEN_BORDER_RADIUS = 75

