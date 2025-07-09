import LoadingImage from "@/components/LoadingImage";
import MealDetailsComponent from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { DetailsMealRootStack } from "@/types/navigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useLayoutEffect, useState } from "react";
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

type MealDetailsRouteProp = RouteProp<DetailsMealRootStack>;
type MealDetailsNavigationProp = NativeStackNavigationProp<DetailsMealRootStack>;

const MealDetails = () => {
    const route = useRoute<MealDetailsRouteProp>();
    const navigation = useNavigation<MealDetailsNavigationProp>();
    const [loadingImage, setLoadingImage] = useState<boolean>();
    const [wish, setWish] = useState(false);
    const mealId = route.params.mealId;

    const likehandler = () => {
        selectedMeal?.setIsVegan(wish);
        setWish(prev => !prev);
    }
    const selectedMeal = MEALS.find(item => item.id === mealId);
    const details = {
        duration: selectedMeal?.duration,
        complexity: selectedMeal?.complexity || "",
        affordability: selectedMeal?.affordability || "",
        color: "white"
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    onPress={likehandler}
                    style={({ pressed }) => pressed && {
                        opacity: 0.5
                    }}
                >
                    <AntDesign
                        name={wish ? "star" : "staro"}
                        size={24}
                        color="white"
                    />
                </Pressable>
            )
        })
    }, [wish])

    useLayoutEffect(() => {
        setWish(selectedMeal?.isVegan || false);
        navigation.setOptions({
            title: selectedMeal?.title
        })
    }, [])

    return (
        <View style={styles.container}>
            {
                loadingImage && <LoadingImage height={100} />
            }
            <Image
                source={{ uri: selectedMeal?.imageUrl }}
                alt={selectedMeal?.title}
                style={[styles.image, {
                    maxHeight: loadingImage ? 0 : "auto"
                }]}
                onLoadStart={() => setLoadingImage(true)}
                onLoadEnd={() => setLoadingImage(false)}
            />
            <ScrollView>
                <View style={styles.itemGroup}>
                    <Text style={styles.title}>{selectedMeal?.title}</Text>
                    <MealDetailsComponent {...details} />
                </View>
                <View style={styles.itemGroup}>
                    <Text style={styles.subTitle}>Ingredients</Text>
                    {
                        selectedMeal?.ingredients.map(ingredient =>
                            <Text key={ingredient} style={styles.textWhite}>{ingredient}</Text>
                        )
                    }
                </View>
                <View style={styles.itemGroup}>
                    <Text style={styles.subTitle}>Steps</Text>
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

const heightScreen = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 10,
        maxHeight: heightScreen - 140
    },
    image: {
        width: "100%",
        height: 350,
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
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        marginBottom: 10
    }
})