import {BaseTheme, createBox, createText, createTheme} from '@shopify/restyle'

export  const palette = {
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
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",

    green: "#2CB9B0",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
};


const theme: BaseTheme = createTheme({
    colors: {
        mainBackground       : palette.white,
        cardPrimaryBackground: palette.purplePrimary,


        textWhite   : palette.white,
        textDefault : palette.textDefault,
        textBody    : palette.body,
        primary     : palette.primary,
        primaryLight: palette.primaryLight,
        secondary   : palette.secondary,

        white: palette.white,
        text : "rgba(12, 13, 52, 0.7)",
        grey: "rgba(12, 13, 52, 0.05)",
        black : "black",
        danger: "#FF0058",

        background: palette.white,
        background2: "#F6F6F6",
        graph1: palette.orange,
        graph2: palette.yellow,
        drawer1: palette.orange,
        drawer2: palette.yellow,
        drawer3: palette.pink,
        drawer4: palette.violet,
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
        xl: 75,
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
            fontFamily: "SFProText-SemiBold",
            fontSize: 28,
            color: "textDefault",
        },
        title: {
            fontFamily: "SFProText-SemiBold",
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
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: "SFProText-SemiBold",
            color: "secondary",
        },
    },

});

export type Theme = typeof theme;
export default theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

