import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const CustomGoBack = () => {

    return <AntDesign
        name="leftcircleo"
        size={24}
        color="white"
        style={{
            paddingLeft: 0,
            paddingRight: 20
        }}
        onPress={() => router.back()}
    />
}

export default CustomGoBack;