import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Slide, {SLIDE_HEIGHT} from "./Slide";
import {SCREEN_WIDTH, SPLASH_SCREEN_BORDER_RADIUS} from "../../../Constants";
import Animated, {divide, multiply} from 'react-native-reanimated'
import {interpolateColor, useScrollHandler} from "react-native-redash/lib/module/v1";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const slides = [
    {
        title: "Relaxed", subTitle: "Find Our Outfits", description: `Confused about your outfit? Don't worry
    Find the best outfit here!`, color: "#BFEAF5"
    },
    {
        title: "Playful", subTitle: "Here is Fist, Wear is Fist", description: `Hating the clothes is your wardrobe? 
    Explore hundreds of outfit ideas`, color: "#BEECC4"
    },
    {
        title: "Excentric",
        subTitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9"
    },
    {
        title: "Funky",
        subTitle: "Look Good, Feel Good",
        description: "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD"
    },
]
const OnBoarding = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    const {scrollHandler, x} = useScrollHandler()

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * SCREEN_WIDTH),
        outputRange: slides.map((_) => _.color),
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
                <Animated.ScrollView horizontal snapToInterval={SCREEN_WIDTH} decelerationRate="fast"
                                     showsHorizontalScrollIndicator={false} bounces={false}
                                     {...scrollHandler}
                                     ref={scroll}
                >
                    {slides.map(({title}, i) =>
                        <Slide
                            key={i} {...{title}}
                            right={!!(i % 2)}
                        />
                    )}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor}}/>

                <View
                    style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {
                            slides.map((_,i)=> <Dot key={i} currentIndex={divide(x, SCREEN_WIDTH)} {...{i}} /> )
                        }
                    </View>

                    <Animated.View style={ {
                        width: SCREEN_WIDTH * slides.length,
                        flex: 1,
                        flexDirection: "row",
                        transform: [{translateX: multiply(x, -1)}]

                    }}>
                        {slides.map(({subTitle, description}, i) =>
                            <SubSlide
                                key={i} {...{subTitle, description, x}}
                                last={i == (slides.length - 1)}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({x: SCREEN_WIDTH * (i + 1), animated: true})
                                    }
                                }}
                            />
                        )}
                    </Animated.View>

                </ View>
            </View>
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: 'cyan',
        borderBottomRightRadius: SPLASH_SCREEN_BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: SPLASH_SCREEN_BORDER_RADIUS / 2,

        justifyContent:"center",
        alignItems:"center",
        flexDirection: "row"
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: SPLASH_SCREEN_BORDER_RADIUS,
    }
})
