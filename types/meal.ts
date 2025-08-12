import Meal from "@/models/meal";

export type MealType = Omit<Meal, keyof Meal & (keyof { setIsVegan: any })>