import { CATEGORIES } from "@/data/dummy-data";
import { CategoryType } from "@/types/category";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import CategoryGridTile from "./CategoryGridTile";

export type RootStackParamList = {
  mealsOverview: undefined
}

type NavigationType = NativeStackNavigationProp<RootStackParamList, "mealsOverview">;

type RenderCategoryItemType = {
  item: CategoryType;
}


const CategoriesScreen = () => {

  const navigation = useNavigation<NavigationType>();
  const pressHandler = () => {
    navigation.navigate("mealsOverview");
  }

  const renderCategoryItem = ({ item }: RenderCategoryItemType) => {

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
