import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet } from "react-native";

interface IconProps {
    name: ComponentProps<typeof MaterialIcons>['name'];
    size?: number;
    color?: string;
    onPress?: ([...args]: any) => void;
    iconStyle?: Object;
}

const Icon = ({ name, size, color, onPress, iconStyle }: IconProps) => {

    return (
        <Pressable 
            style={({ pressed }) => [styles.container, pressed && styles.pressed]}
            onPress={onPress}
        >
            <MaterialIcons
                name={name}
                size={size || 24}
                color={color || "white"}
                style={iconStyle}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    pressed: {
        opacity: 0.7
    }
})

export default Icon;