import { MealType } from "@/types/meal";
import { DetailsMealRootStack } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

type MealDetailsNavigation = NativeStackNavigationProp<DetailsMealRootStack>;

const MealItem = (props: MealType) => {

    const navigation = useNavigation<MealDetailsNavigation>();
    const {
        id,
        title,
        imageUrl,
        duration,
        complexity,
        affordability
    } = props;

    const navigationHandler = ()=> {
        navigation.navigate("mealDetails", {
            mealId: id
        })
    }

    return (
        <View style={styles.item}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={navigationHandler}
            >
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
                <View style={styles.itemGroup}>
                    <Text
                        style={styles.title}
                    >
                        {title}
                    </Text>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                        color="black"
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    item: {
        gap: 5,
        margin: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    itemGroup: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 16,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 8
    }
})