import { CATEGORIES } from "@/data/dummy-data";
import { CategoryType } from "@/types/category";
import { FlatList } from "react-native";
import CategoryGridTile from "./CategoryGridTile";

const renderCategoryItem = ({ item }: { item: CategoryType })=> {
    
    return (
        <CategoryGridTile title={item.title} color={item.color} />
    )
}

const CategoriesScreen = () => {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} />
    )
}
 
export default CategoriesScreen;