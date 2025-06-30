import { CATEGORIES } from "@/data/dummy-data";
import { CategoryType } from "@/types/category";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import CategoryGridTile from "./CategoryGridTile";

type NavigationType = NativeStackNavigationProp<RootStackParamList, "Categories">;

type RenderCategoryItemType = {
  item: CategoryType;
}

const CategoriesScreen = () => {

  const navigation = useNavigation<NavigationType>();

  const renderCategoryItem = ({ item }: RenderCategoryItemType) => {

    const pressHandler = () => {
      navigation.navigate("mealsOverview", {
        categoryId: item.id
      })
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;
