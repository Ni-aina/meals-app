import Meal from "@/models/meal";

// Get the type of class without methods
export type MealType = Omit<Meal, keyof Meal & (keyof { setIsVegan: any })>