import { Pressable, Text, View } from "react-native";

interface CategoryGridTileInterface {
    title: string,
    color: string
}

const CategoryGridTile = ({ title, color }: CategoryGridTileInterface) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
 
export default CategoryGridTile;