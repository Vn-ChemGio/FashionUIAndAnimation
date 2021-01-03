import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../../Constants";
import {Text} from '../../components'

interface SlideProps {
    title: string;
    right?: boolean;
    // picture :{
    //     src: ImageRequireSource,
    //     width: number,
    //     height:number
    // }
}

export const SLIDE_HEIGHT = 0.61 * SCREEN_HEIGHT;
const Slide = ({title, right}: SlideProps) => {
    const transform = [
        {translateY: (SLIDE_HEIGHT - 100) / 2},
        {translateX: right ? (SCREEN_WIDTH / 2 - 50) : (- (SCREEN_WIDTH/2) +50)},
        {rotate:right ? "-90deg" :"90deg"}
    ]
    return (
        <View style={styles.container}>
            {/*<View style={styles.underLayer}>*/}
            {/*    <Image source={picture.src} style={{*/}
            {/*        width: SCREEN_WIDTH- SPLASH_SCREEN_BORDER_RADIUS,*/}
            {/*        height: (SCREEN_WIDTH- SPLASH_SCREEN_BORDER_RADIUS) * picture.height / picture.width,*/}
            {/*    }}/>*/}
            {/*</View>*/}
            <View style={[styles.titleContainer, {transform}]}>
                <Text  variant="heroTitle">{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
    },
    // underLayer:{
    //     ...StyleSheet.absoluteFillObject,
    //     justifyContent:"flex-end",
    //     alignItems:"center"
    // },

    titleContainer: {
        height: 100,
        justifyContent: "center"
    }
})
