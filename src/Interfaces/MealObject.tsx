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
    },
    {
        //13
        name: "Tomato",
        image: "https://www.freepnglogos.com/uploads/tomato-png/tomato-basic-knives-and-their-uses-1.png",
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
        name: "Potato",
        image: "https://www.freeiconspng.com/thumbs/potato-png/potato-png-32.png",
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
        name: "Broccoli",
        image: "https://www.pngkey.com/png/detail/440-4402560_broccoli-transparent-transparent-background-broccoli-png.png",
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
        name: "Cauliflower",
        image: "https://www.pngkey.com/png/detail/440-4402560_broccoli-transparent-transparent-background-broccoli-png.png",
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
        name: "Green Peas",
        image: "data:image/jpeg;base64,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",
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
        name: "Mushroom",
        image: "https://www.freeiconspng.com/uploads/mushroom-png-image-9.png",
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
        name: "Garlic",
        image: "https://p7.hiclipart.com/preview/432/966/414/5bbc0391d6b6d.jpg",
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
        name: "Carrot",
        image: "https://www.nicepng.com/png/detail/6-69141_single-carrot-transparent-background-carrot-png.png",
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
        name: "Corn",
        image: "https://image.similarpng.com/very-thumbnail/2020/08/Illustration-of-Sweet-corn-on-transparent-background-PNG.png",
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
        image: "https://image.similarpng.com/very-thumbnail/2020/08/Illustration-of-Sweet-corn-on-transparent-background-PNG.png",
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
        image: "https://image.similarpng.com/very-thumbnail/2020/08/Illustration-of-Sweet-corn-on-transparent-background-PNG.png",
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
        name: "Ginger",
        image: "https://image.similarpng.com/very-thumbnail/2020/08/Illustration-of-Sweet-corn-on-transparent-background-PNG.png",
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
        image: "https://p7.hiclipart.com/preview/908/453/76/oatmeal-whole-grain-bran-cereal-oats.jpg",
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
        name: "White rice",
        image: "https://p7.hiclipart.com/preview/662/463/668/chinese-cuisine-cooked-rice-white-rice-boiling-rice.jpg",
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
        image: "https://toppng.com/uploads/preview/black-beans-11525986910bdg1vn3l2b.png",
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
        name: "Beetroot",
        image: "https://assets.stickpng.com/images/585ea458cb11b227491c351f.png",
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
        name: "Green Bell Pepper",
        image: "https://assets.stickpng.com/images/585ea783cb11b227491c3538.png",
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
