import { MEALS } from "@/data/dummy-data";
import { FavoriteContext } from "@/store/context/favoriteContext";
import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RenderMealItem from "./RenderMealItem";

const FavoriteMeals = () => {

    const { ids } = useContext(FavoriteContext);

    const displayedMeals = MEALS.filter(meal => ids.includes(meal.id));

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

export default FavoriteMeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingBottom: 40
    }
})