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
        name: "Grilled Salmon",
        image: "https://www.nicepng.com/png/full/71-715244_stock-png-for-free-download-on-mbtskoudsalg-salmon.png",
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
        name: "Sauteed Kale",
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
        name: "Grilled Chicken",
        image: "https://pngimg.com/d/fried_chicken_PNG14102.png",
        serving_size: 1,
        calories: 44,
        total_fat: 0.1,
        cholesterol: 0,
        sodium: 4,
        total_carbs: 10,
        total_sugars: 4.2,
        protein: 1.1
    },
    {
        //13
        name: "Almonds",
        image: "https://static.vecteezy.com/system/resources/previews/012/596/342/original/group-of-almond-nuts-concept-free-png.png",
        serving_size: 1,
        calories: 43,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 20,
        total_carbs: 10,
        total_sugars: 3.92,
        protein: 1.31
    },
    {
        //14
        name: "French Fries",
        image: "https://static.vecteezy.com/system/resources/previews/013/442/145/original/crispy-and-delicious-french-fries-free-png.png",
        serving_size: 1,
        calories: 164,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 24,
        total_carbs: 37,
        total_sugars: 1.9,
        protein: 4.6
    },
    {
        //15
        name: "Sauteed Broccoli",
        image: "https://purepng.com/public/uploads/large/green-fresh-broccoli-ike.png",
        serving_size: 1,
        calories: 45,
        total_fat: 0.3,
        cholesterol: 0,
        sodium: 30,
        total_carbs: 6,
        total_sugars: 1.5,
        protein: 2.5
    },
    {
        //16
        name: "Sauteed Cauliflower",
        image: "https://freepngimg.com/thumb/categories/2972.png",
        serving_size: 1,
        calories: 25,
        total_fat: 0,
        cholesterol: 0,
        sodium: 30,
        total_carbs: 5,
        total_sugars: 2,
        protein: 2
    },
    {
        //17
        name: "Mashed Potatoes",
        image: "https://www.eatatjacks.com/wp-content/uploads/2020/08/mashed-potatoes.png",
        serving_size: 1,
        calories: 62,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 7,
        total_carbs: 11,
        total_sugars: 2,
        protein: 4
    },
    {
        //18
        name: "White Rice",
        image: "https://assets.stickpng.com/images/5bbc96d30bc67a02c98d958e.png",
        serving_size: 1,
        calories: 15,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 3.5,
        total_carbs: 2.3,
        total_sugars: 1.4,
        protein: 2.2
    },
    {
        //19
        name: "Boiled Eggs",
        image: "https://static.vecteezy.com/system/resources/previews/016/718/105/original/boiled-eggs-for-breakfast-free-png.png",
        serving_size: 1,
        calories: 203,
        total_fat: 0.7,
        cholesterol: 0,
        sodium: 23,
        total_carbs: 2.3,
        total_sugars: 0.09,
        protein: 2.16
    },
    {
        //20
        name: "Cucumber",
        image: "https://www.pngmart.com/files/5/Cucumbers-Transparent-PNG.png",
        serving_size: 1,
        calories: 16,
        total_fat: 0,
        cholesterol: 0,
        sodium: 2,
        total_carbs: 4,
        total_sugars: 2,
        protein: 0.6
    },
    {
        //21
        name: "Butter",
        image: "https://purepng.com/public/uploads/large/purepng.com-butterfood-dairy-milk-butter-buttermilk-cream-butterfat-941524621398zsmge.png",
        serving_size: 1,
        calories: 23,
        total_fat: 0,
        cholesterol: 0,
        sodium: 38,
        total_carbs: 5,
        total_sugars: 3,
        protein: 1
    },
    {
        //22
        name: "Toast",
        image: "https://www.pngmart.com/files/5/Toast-PNG-Free-Download.png",
        serving_size: 1,
        calories: 88,
        total_fat: 1.4,
        cholesterol: 0,
        sodium: 2,
        total_carbs: 19,
        total_sugars: 6.4,
        protein: 3.3
    },
    {
        //23
        name: "Avocado",
        image: "https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png",
        serving_size: 1,
        calories: 88,
        total_fat: 1.4,
        cholesterol: 0,
        sodium: 2,
        total_carbs: 19,
        total_sugars: 6.4,
        protein: 3.3
    },
    {
        //24
        name: "Asparagus",
        image: "https://pngimg.com/d/asparagus_PNG4.png",
        serving_size: 1,
        calories: 88,
        total_fat: 1.4,
        cholesterol: 0,
        sodium: 2,
        total_carbs: 19,
        total_sugars: 6.4,
        protein: 3.3
    },
    {
        //25
        name: "Brown Rice",
        image: "https://www.pngkit.com/png/full/480-4809180_brown-rice-png-image-background-brown-rice-png.png",
        serving_size: 1,
        calories: 88,
        total_fat: 1.4,
        cholesterol: 0,
        sodium: 2,
        total_carbs: 19,
        total_sugars: 6.4,
        protein: 3.3
    },
    {
        //26
        name: "Oats",
        image: "https://www.pngall.com/wp-content/uploads/10/Oatmeal-PNG-Clipart.png",
        serving_size: 1,
        calories: 606.84,
        total_fat: 10.76,
        cholesterol: 0,
        sodium: 3.12,
        total_carbs: 103.38,
        total_sugars: 6.4,
        protein: 26.35
    },
    {
        //27
        name: "White Rice",
        image: "https://static.vecteezy.com/system/resources/previews/009/887/170/original/white-rice-in-bow-free-png.png",
        serving_size: 1,
        calories: 242,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 0,
        total_carbs: 41.16,
        total_sugars: 0,
        protein: 4.4
    },
    {
        //28
        name: "Black Beans",
        image: "https://lacriolla.com/wp-content/uploads/2017/08/black-beans.png",
        serving_size: 1,
        calories: 114,
        total_fat: 0.4,
        cholesterol: 0,
        sodium: 461,
        total_carbs: 20,
        total_sugars: 0.3,
        protein: 8
    },
    {
        //29
        name: "Pinto Beans",
        image: "https://www.pngmart.com/files/22/Pinto-Beans-PNG-HD.png",
        serving_size: 1,
        calories: 43,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 64,
        total_carbs: 9.6,
        total_sugars: 6.8,
        protein: 1.6
    },
    {
        //30
        name: "Fruit Smoothie",
        image: "https://www.pngmart.com/files/19/Strawberry-Smoothie-PNG-Free-Download.png",
        serving_size: 1,
        calories: 33,
        total_fat: 0.28,
        cholesterol: 0,
        sodium: 4,
        total_carbs: 7.61,
        total_sugars: 2,
        protein: 1.41
    }
];
