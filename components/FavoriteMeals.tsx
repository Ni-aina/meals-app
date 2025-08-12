import { FavoriteContext } from "@/context/FavoriteContext";
import { MEALS } from "@/data/dummy-data";
import { useContext } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import RenderMealItem from "./RenderMealItem";

const FavoriteMeals = () => {

    const { ids } = useContext(FavoriteContext);

    const displayedMeals = MEALS.filter(meal => ids.includes(meal.id));

    if (!ids.length) return (
        <View style={styles.noIdsContainer}>
            <Text style={styles.text}>
                You haven't any favorite meals yet.
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={meal => meal.id}
                renderItem={RenderMealItem}
            />
        </View>
    )
}

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingBottom: 40
    },
    noIdsContainer: {
        height: height - 200,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#e4baa1",
        fontSize: 18
    }
})

export default FavoriteMeals;