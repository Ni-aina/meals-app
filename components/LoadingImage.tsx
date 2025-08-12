import AntDesign from "@expo/vector-icons/AntDesign";
import { useLayoutEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

interface LoadingImageProps {
    minHeight?: number;
}

const LoadingImage = ({ minHeight }: LoadingImageProps) => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useLayoutEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    });

    return (
        <View style={[styles.container, { minHeight }]}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <AntDesign
                    name="loading1"
                    size={30}
                    style={styles.icon}
                />
            </Animated.View>
        </View>
    )
}

export default LoadingImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        color: "#eee"
    }
})