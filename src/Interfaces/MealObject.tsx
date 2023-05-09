export interface Meal {
    name: string;
    image: string;
    serving_size: number;
    //should we have a units var for every number?
    //can't be a universal unit bc some are diff
    //serving_size_units: string;
    calories: number;
    total_fat: number;
    cholesterol: number;
    sodium: number;
    total_carbs: number;
    total_sugars: number;
    protein: number;
    tags: string[];
    ingredients:string[];

    meat, dairy, vegan, vegetarian, gluten
}


export interface nameProps {
    name: string;
}
export interface MealListProps {
    mealList: Meal[];
    setMealList: (newMealList: Meal[]) => void;
}

export interface MealProps2 {
    meal2: Meal;
}

export interface MealProps {
    meal: string;
}
export interface mealList {
    mealList: Meal[];
    setMealList: (newUserList: Meal[]) => void;
}

export const MEAL_LIST: Meal[] = [
    {
        name: "Greek Salad",
image: "https://www.pngkey.com/png/full/386-3862865_greek-salad-png.png",
serving_size: 1,
calories: 145,
total_fat: 11,
cholesterol: 25,
sodium: 430,
total_carbs: 8,
total_sugars: 4,
protein: 5,
ingredients: ["lettuce", "tomatoes", "cucumber", "olives", "feta cheese"],
tags: ["vegetarian", "gluten-free"]
},
{
name: "Chicken Caesar Salad",
image: "https://www.pngkit.com/png/full/52-520064_caesar-salad-png.png",
serving_size: 1,
calories: 220,
total_fat: 12,
cholesterol: 60,
sodium: 580,
total_carbs: 9,
total_sugars: 2,
protein: 20,
ingredients: ["romaine lettuce", "grilled chicken", "croutons", "parmesan cheese", "caesar dressing"],
tags: ["gluten-free"]
},
{
name: "Baked Chicken",
image: "https://www.pngitem.com/pimgs/m/383-3832345_cooked-chicken-png-chicken-pieces-png-transparent.png",
serving_size: 1,
calories: 210,
total_fat: 8,
cholesterol: 90,
sodium: 270,
total_carbs: 0,
total_sugars: 0,
protein: 33,
ingredients: ["chicken breast", "olive oil", "garlic", "lemon", "thyme"],
tags: ["gluten-free"]
},
{
name: "Beef Stir-Fry",
image: "https://www.pngitem.com/pimgs/m/253-2537022_beef-stir-fry-png-transparent-png.png",
serving_size: 1,
calories: 350,
total_fat: 15,
cholesterol: 60,
sodium: 680,
total_carbs: 20,
total_sugars: 10,
protein: 30,
ingredients: ["beef strips", "broccoli", "carrots", "onion", "soy sauce"],
tags: ["gluten-free"]
},
{
name: "Veggie Burger",
image: "https://www.pngkey.com/png/full/472-4722135_veggie-burger-png.png",
serving_size: 1,
calories: 320,
total_fat: 12,
cholesterol: 0,
sodium: 740,
total_carbs: 30,
total_sugars: 6,
protein: 20,
ingredients: ["veggie patty", "lettuce", "tomato", "onion", "whole wheat bun"],
tags: ["vegetarian", "vegan"]
},

{
    name: "Green Smoothie",
    image: "https://www.pngmart.com/files/15/Green-Smoothie-PNG-Transparent-Image.png",
    serving_size: 1,
    calories: 49,
    total_fat: 0.4,
    cholesterol: 0,
    sodium: 29,
    total_carbs: 11.51,
    total_sugars: 5.37,
    protein: 2.16,
    ingredients: [spinach, banana, pineapple, coconut water],
    tags: [vegan, vegetarian, gluten-free, healthy]
},
{
    name: "Banana Pancakes",
    image: "https://www.pngmart.com/files/6/Banana-Pancakes-PNG-Photos.png",
    serving_size: 3,
    calories: 327,
    total_fat: 7,
    cholesterol: 92,
    sodium: 707,
    total_carbs: 59,
    total_sugars: 11,
    protein: 8,
    ingredients: [flour, milk, egg, banana, butter],
    tags: [breakfast, sweet, dairy, gluten]
},
{
    name: "Mushroom Risotto",
    image: "https://www.pngmart.com/files/10/Mushroom-Risotto-PNG-Image.png",
    serving_size: 2,
    calories: 445,
    total_fat: 17,
    cholesterol: 23,
    sodium: 988,
    total_carbs: 61,
    total_sugars: 3,
    protein: 11,
    ingredients: [arborio rice, vegetable broth, mushrooms, onion, garlic, parmesan cheese],
    tags: [dinner, vegetarian, gluten]
},
{
    name: "Chicken Fajitas",
    image: "https://www.pngmart.com/files/1/Chicken-Fajitas-Transparent-Background.png",
    serving_size: 2,
    calories: 437,
    total_fat: 19,
    cholesterol: 85,
    sodium: 622,
    total_carbs: 34,
    total_sugars: 8,
    protein: 35,
    ingredients: [chicken breast, bell peppers, onion, garlic, tortillas],
    tags: [dinner, meat]
},
{
    name: "Pesto Pasta Salad",
    image: "https://www.pngmart.com/files/7/Pesto-Pasta-Salad-PNG-Clipart.png",
    serving_size: 4,
    calories: 443,
    total_fat: 23,
    cholesterol: 4,
    sodium: 298,
    total_carbs: 45,
    total_sugars: 3,
    protein: 11,
    ingredients: [pasta, cherry tomatoes, fresh basil, parmesan cheese, pine nuts, olive oil],
    tags: [lunch, vegetarian, gluten]
},
{
    name: "Tuna Salad",
    image: "https://www.pngmart.com/files/9/Tuna-Salad-Transparent-Background.png",
    serving_size: 2,
    calories: 195,
    total_fat: 9,
    cholesterol: 33,
    sodium: 190,
    total_carbs: 2,
    total_sugars: 1,
    protein: 26,
    ingredients: ["canned tuna", "mayonnaise", "celery", "onion", "lemon juice"],
    tags: ["lunch", "seafood"]
}
           
];
