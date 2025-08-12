import RenderMealItem from "@/components/RenderMealItem";
import { MEALS } from "@/data/dummy-data";
import { MealsOverviewRootStack } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";

type MealsOverviewScreenRouteProp = RouteProp<MealsOverviewRootStack>;

const MealsOverviewScreen = () => {

    const route = useRoute<MealsOverviewScreenRouteProp>();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingBottom: 50
    }
})

export default MealsOverviewScreen;
