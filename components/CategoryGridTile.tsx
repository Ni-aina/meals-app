import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryGridTileInterface {
    title: string,
    color: string,
    onPress: ()=> void
}

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTileInterface) => {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{ color: "#ccc" }} 
                style={({ pressed })=> [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerGrid, { backgroundColor: color }]}>
                    <Text style={{ fontSize: 18 }}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
 
export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    buttonPressed: {
        opacity: 0.5
    },
    button: {
        flex: 1
    },
    innerGrid: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 8
    }
})