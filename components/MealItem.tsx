import { MealType } from "@/types/meal";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = (props: MealType) => {

    const {
        title,
        imageUrl,
        duration,
        complexity,
        affordability
    } = props;

    return (
        <View style={styles.item}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
                <View style={styles.itemGroup}>
                    <Text
                        style={styles.title}
                    >
                        {title}
                    </Text>
                    <View style={styles.details}>
                        <Text>{duration}m</Text>
                        <Text>{complexity}</Text>
                        <Text>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    item: {
        gap: 5,
        margin: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    itemGroup: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 16,
        backgroundColor: "#ddd"
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 8
    },
    details: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})