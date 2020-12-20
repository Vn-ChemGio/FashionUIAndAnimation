import {BaseTheme, createBox, createText, createTheme} from '@shopify/restyle'

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',

    white: 'white',
    textDefault: '#0C0D34',
    body: "rgba(12,13,52,0.7)",
    primary: "#2CB9B0",
    secondary: "rgba(12,13,52,0.05)"

};


const theme: BaseTheme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,


        textWhite: palette.white,
        textDefault: palette.textDefault,
        textBody: palette.body,
        primary: palette.primary,
        secondary: palette.secondary,


    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii:{
        s: 4,
        m: 10,
        l: 25,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        heroTitle: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProText-Bold",
            color: "textWhite",
            textAlign: "center"
        },
        lTitle: {
            fontFamily: "SFProText-Semibold",
            fontSize: 28,
            color: "textDefault",
        },
        title: {
            fontFamily: "SFProText-Semibold",
            fontSize: 24,
            lineHeight: 30,
            color: "textDefault",

        },
        body: {
            fontFamily: "SFProText-Regular",
            fontSize: 16,
            lineHeight: 24,
            color: "textBody",

        },
        button:{
            fontFamily: "SFProText-Regular",
            fontSize: 15,
            color: "textBody",
        }
    },

});

export type Theme = typeof theme;
export default theme;

export const Text = createText<Theme>()
export const Box = createBox<Theme>()
