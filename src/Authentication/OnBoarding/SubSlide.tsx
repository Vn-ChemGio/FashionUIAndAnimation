import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Text} from "../../components";

interface SubSlideProps {
    subTitle: string;
    description: string;
    last?: boolean;
    onPress: () => void
}

const SubSlide = ({subTitle, description, last, onPress}: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="title" style={styles.subTitle}> {subTitle}</Text>
            <Text variant="body" style={styles.description}> {description}</Text>

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
        textAlign: "center",
    },
    description: {
        textAlign: "center"
    }


})
