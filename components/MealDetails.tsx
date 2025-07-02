import { StyleSheet, Text, View } from "react-native";

interface MealDetailsInterface {
    duration: number | undefined,
    complexity: string,
    affordability: string,
    color: string
}

const MealDetails = ({
    duration,
    complexity,
    affordability, 
    color
}: MealDetailsInterface) => {

    return (
        <View style={styles.details}>
            <Text style={{ color }}>{duration || ""}m</Text>
            <Text style={{ color }}>{complexity}</Text>
            <Text style={{ color }}>{affordability}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})