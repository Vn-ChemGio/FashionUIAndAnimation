import React from 'react';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated'

interface DotProps {
    i: number,
    currentIndex: number
}

const Dot = ({i, currentIndex}: DotProps) => {
    const opacity = interpolate(currentIndex, {
        inputRange: [i - 1, i, i + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP
    })

    const scale = interpolate(currentIndex, {
        inputRange: [i - 1, i, i + 1],
        outputRange: [1, 1.5, 1],
        extrapolate: Extrapolate.CLAMP
    })
    return (
        <Animated.View style={{
            opacity,
            backgroundColor: "#2CB9B0",
            width: 8,
            height: 8,
            borderRadius: 4,
            margin: 4,
            transform: [{scale}]
        }}>

        </Animated.View>
    );
};
export default Dot;
