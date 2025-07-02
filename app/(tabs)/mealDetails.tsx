import MealDetailscomponent from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { DetailsMealRootStack } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type MealDetailsRouteProp = RouteProp<DetailsMealRootStack>;

const MealDetails = () => {
    const route = useRoute<MealDetailsRouteProp>();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find(item => item.id === mealId);
    const details = {
        duration: selectedMeal?.duration,
        complexity: selectedMeal?.complexity || "",
        affordability: selectedMeal?.affordability || "",
        color: "white"
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedMeal?.imageUrl }}
                alt={selectedMeal?.title}
                style={styles.image}
            />
            <ScrollView>
                <View style={styles.itemGroup}>
                    <Text style={[styles.title, styles.textWhite]}>{selectedMeal?.title}</Text>
                    <MealDetailscomponent {...details} />
                </View>
                <View style={styles.itemGroup}>
                    <Text style={styles.textWhite}>Ingredients</Text>
                    {
                        selectedMeal?.ingredients.map(ingredient => 
                            <Text key={ingredient} style={styles.textWhite}>{ingredient}</Text>
                        )
                    }
                </View>
                <View style={styles.itemGroup}>
                    <Text style={styles.textWhite}>Steps</Text>
                    {
                        selectedMeal?.steps.map(step => 
                            <Text key={step} style={styles.textWhite}>{step}</Text>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}
 
export default MealDetails;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 250,
        gap: 10
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    itemGroup: {
        gap: 5,
        alignItems: "flex-start",
    },
    textWhite: {
        color: "white"
    },
    title: {
        fontSize: 18,
        textTransform: "uppercase"
    }
})