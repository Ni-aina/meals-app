import { MealType } from "@/types/meal"
import MealItem from "./MealItem"

type RenderMealItemType = {
    item: MealType
}

const RenderMealItem = ({ item }: RenderMealItemType) => {

    const meal = { ...item }

    return (
        <MealItem
            {...meal}
        />
    )
}

export default RenderMealItem;