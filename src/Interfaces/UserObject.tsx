import { Ingredient } from "./IngredientObject";

export interface User {
    name: string;
    list_of_items: Ingredient[];
}
