import MealItem from "@/components/MealItem";
import { MEALS } from "@/data/dummy-data";
import { MealType } from "@/types/meal";
import { RootStackParamList } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";

type MealsOverviewScreenRouteProp = RouteProp<RootStackParamList, "mealsOverview">;

type renderMealOverviewItemType = {
    item: MealType
}

const renderMealOverviewItem = ({ item }: renderMealOverviewItemType) => {

    const meal = { ...item }

    return (
        <MealItem
            {...meal}
        />
    )
}

const MealsOverviewScreen = () => {

    const route = useRoute<MealsOverviewScreenRouteProp>();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={meal => meal.id}
                renderItem={renderMealOverviewItem}
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})