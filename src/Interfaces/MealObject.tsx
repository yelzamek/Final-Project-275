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
        name: "Granola Bar",
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
        name: "Banana",
        image: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=740&hei=740&qlt=80&fmt=webp",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "Pizza",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg",
        serving_size: 1,
        calories: 600,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    },
    {
        name: "Steak",
        image: "https://whitneybond.com/wp-content/uploads/2021/06/steak-marinade-17.jpg",
        serving_size: 1,
        calories: 160,
        total_fat: 8,
        cholesterol: 50,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "Apple",
        image: "https://static.libertyprim.com/files/varietes/pomme-akane-large.jpg?1569320193",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "Spaghetti",
        image: "https://media.istockphoto.com/id/185211679/photo/standing-spaghetti.jpg?s=612x612&w=0&k=20&c=KxQPQjvWIu_RUFjhnY1umtugD6i8up6n1zBMTqbgfjc=",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "Bagel",
        image: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=740&hei=740&qlt=80&fmt=webp",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "Cheese Danish",
        image: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=740&hei=740&qlt=80&fmt=webp",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    },
    {
        name: "BBQ Sauce",
        image: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=740&hei=740&qlt=80&fmt=webp",
        serving_size: 1,
        calories: 110,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 1,
        total_carbs: 27,
        total_sugars: 15,
        protein: 1
    }
];
