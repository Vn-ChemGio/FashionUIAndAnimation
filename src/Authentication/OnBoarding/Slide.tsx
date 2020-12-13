import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../../Constants";

interface SlideProps {
    title: string;
    right?: boolean;
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
            <View style={[styles.titleContainer, {transform}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center"

    },
    title: {
        fontSize: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center"
    }

})
