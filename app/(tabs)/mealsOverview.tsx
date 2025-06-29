import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{ padding: 10, fontSize: 24, color: "white" }}>Meals Overview Screen</Text>            
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