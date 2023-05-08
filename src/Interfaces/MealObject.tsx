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
        name: "granola bar",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Honey-Oat-Granola-Bars_EXPS_BOBBZ22_38126_B10_06_1b-6.jpg?fit=700,1024",
        serving_size: 1,
        calories: 100,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    },
    {
        name: "banana",
        image: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=740&hei=740&qlt=80&fmt=webp",
        serving_size: 1,
        calories: 100,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    },
    {
        name: "pizza",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg",
        serving_size: 1,
        calories: 100,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    }
];
