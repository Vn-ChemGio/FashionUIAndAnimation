import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from "../../components";

interface SubSlideProps {
    subTitle: string;
    description: string;
    last?: boolean;
    onPress: () => void
}

const SubSlide = ({subTitle, description, last, onPress}: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}> {subTitle}</Text>
            <Text style={styles.description}> {description}</Text>
            <Button
                label={last ? "Let's get started " : "Next"}
                variant={last? "primary" : "default"}
                {...{onPress}}
            />
        </View>
    );
};

export default SubSlide;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    },
    subTitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        color: "#0C0D34",
        textAlign: "center",
        lineHeight:30,
        marginBottom:12
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        color: "#0C0D34",
        lineHeight: 24,
        textAlign: "center"
    }


})
