import { StyleSheet, Text, View } from "react-native";

const FavoriteMeals = () => {
    return (
        <View style={ styles.container}>
            <Text style={styles.text}>It'll finish soon</Text>
        </View>
    )
}
 
export default FavoriteMeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: "uppercase"
    }
})