import { MEALS } from "@/data/dummy-data";
import { RootStackParamList } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

type MealsOverviewScreenRouteProp = RouteProp<RootStackParamList, "mealsOverview">;

const MealsOverviewScreen = () => {

    const route = useRoute<MealsOverviewScreenRouteProp>();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

    return (
        <View style={styles.container}>
            {displayedMeals.map(meal => (
                <Text 
                    key={meal.id} 
                    style={{ padding: 10, 
                    fontSize: 24, 
                    color: "white", 
                    marginVertical: 4 
                    }}
                >
                    {meal.title}
                </Text>
            ))}
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#24180f",
        padding: 16
    }
})