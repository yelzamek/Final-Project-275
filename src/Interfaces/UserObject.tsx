import { Meal } from "./MealObject";

export interface User {
    name: string;
    list_of_items: Meal[];
    list_of_favorites: Meal[];
}
