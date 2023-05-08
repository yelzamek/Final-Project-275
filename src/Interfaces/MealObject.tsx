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
        image: "https://www.cascadianfarm.com/wp-content/uploads/2018/12/Product-ImagesArtboard-2-1x-1.png",
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
        image: "https://purepng.com/public/uploads/large/purepng.com-bananafruitsyellowfruitbanana-981524754691bawpo.png",
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
        image: "https://png.pngtree.com/png-clipart/20220712/ourmid/pngtree-pizza-sliced-illustration-clipart-png-transparent-png-image_5894769.png",
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
        image: "https://www.pngmart.com/files/22/Steak-PNG-Isolated-HD.png",
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
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU",
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
        image: "https://www.pngall.com/wp-content/uploads/13/Spaghetti-PNG-Picture.png",
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
        image: "https://images.squarespace-cdn.com/content/v1/58a21d2ee3df281cfde6e815/1506536337547-RR6FYE2ZTERS37N911LB/whole+wheat+bagel.png?format=1000w",
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
        image: "https://harvestbakery.com/wp-content/uploads/2016/04/CheeseDanishRound_1_clipped_rev_1.png",
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
        image: "https://w7.pngwing.com/pngs/876/194/png-transparent-hot-sauce-barbecue-sauce-salsa-pasta-barbeque-sauce-barbecue-food-baking.png",
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
        //10
        name: "Zucchini",
        image: "https://media.istockphoto.com/id/1149201983/photo/fresh-whole-and-sliced-zucchini-isolated-on-white-background-from-top-view-courgette-zucchini.jpg?s=612x612&w=0&k=20&c=8r6T0Lk1iRw0mkbSCMSMKuamrFyvo0QrQD25_jiq10w=",
        serving_size: 1,
        calories: 55,
        total_fat: 1,
        cholesterol: 0,
        sodium: 20,
        total_carbs: 10,
        total_sugars: 8,
        protein: 4
    },
    {
        //11
        name: "Kale",
        image: "https://www.pngmart.com/files/5/Kale-PNG-Transparent-Image.png",
        serving_size: 1,
        calories: 20,
        total_fat: 0.47,
        cholesterol: 6,
        sodium: 29,
        total_carbs: 6.71,
        total_sugars: 4.2,
        protein: 2.21
    },
    {
        //12
        name: "Onion",
        image: "https://p7.hiclipart.com/preview/546/145/267/raw-foodism-organic-food-shallot-red-onion-vegetable-onion.jpg",
        serving_size: 1,
        calories: 44,
        total_fat: 0.1,
        cholesterol: 0,
        sodium: 4,
        total_carbs: 10,
        total_sugars: 4.2,
        protein: 1.1
    }
];
