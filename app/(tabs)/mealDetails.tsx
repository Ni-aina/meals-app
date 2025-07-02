import { DetailsMealRootStack } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "react-native";

type MealDetailsRouteProp = RouteProp<DetailsMealRootStack>;

const MealDetails = () => {
    const route = useRoute<MealDetailsRouteProp>();
    const mealId = route.params.mealId;

    return (
        <Text>
            Meal details : {mealId}
        </Text>
    )
}
 
export default MealDetails;