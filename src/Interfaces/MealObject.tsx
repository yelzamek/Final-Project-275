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
    ingredients: string[];

    //meat, dairy, vegan, vegetarian, gluten
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
        name: "Grilled Chicken",
        image: "https://www.pngfind.com/pngs/m/128-1281688_grilled-chicken-png-transparent-png.png",
        serving_size: 1,
        calories: 165,
        total_fat: 3,
        cholesterol: 80,
        sodium: 70,
        total_carbs: 0,
        total_sugars: 0,
        protein: 31,
        ingredients: ["chicken breast", "olive oil", "salt", "pepper"],
        tags: [
            "meat-free",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },

    {
        name: "Lentil Soup",
        image: "https://plantbasedrdblog.com/wp-content/uploads/2022/10/butternut-squash-lentil-soup_feat.jpg",
        serving_size: 4,
        calories: 240,
        total_fat: 3,
        cholesterol: 0,
        sodium: 560,
        total_carbs: 40,
        total_sugars: 5,
        protein: 16,
        ingredients: [
            "lentils",
            "carrots",
            "celery",
            "onion",
            "garlic",
            "tomato paste",
            "vegetable broth"
        ],
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },

    {
        name: "Veggie Burger",
        image: "https://www.pngfind.com/pngs/m/188-1887055_veggie-burger-hd-png-download.png",
        serving_size: 1,
        calories: 285,
        total_fat: 12,
        cholesterol: 0,
        sodium: 550,
        total_carbs: 32,
        total_sugars: 5,
        protein: 16,
        ingredients: [
            "sweet potato",
            "black beans",
            "bread crumbs",
            "egg",
            "cumin",
            "garlic powder",
            "smoked paprika",
            "salt",
            "pepper",
            "whole wheat buns",
            "lettuce",
            "tomato",
            "red onion",
            "mayonnaise",
            "ketchup"
        ],
        tags: [
            "meat-free",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten"
        ]
    },

    {
        name: "Grilled Salmon",
        image: "https://www.pngkey.com/png/full/416-4166634_seafood-grilled-salmon-fillet-transparent-background.png",
        serving_size: 1,
        calories: 400,
        total_fat: 20,
        cholesterol: 100,
        sodium: 75,
        total_carbs: 0,
        total_sugars: 0,
        protein: 50,
        ingredients: ["salmon fillets", "olive oil", "salt", "pepper"],
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },
    {
        name: "Greek Salad",
        image: "https://www.pngfind.com/pngs/m/98-983599_greek-salad-png-transparent-png.png",
        serving_size: 2,
        calories: 190,
        total_fat: 14,
        cholesterol: 0,
        sodium: 450,
        total_carbs: 13,
        total_sugars: 6,
        protein: 5,
        ingredients: [
            "romaine lettuce",
            "cucumber",
            "red onion",
            "kalamata olives",
            "feta cheese",
            "red wine vinegar",
            "olive oil",
            "dried oregano",
            "salt",
            "pepper"
        ],
        tags: [
            "meat-free",
            "dairy",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Tofu Stir-Fry",
        image: "https://www.pngfind.com/pngs/m/68-686371_stir-fry-png-image-transparent-png.png",
        serving_size: 4,
        calories: 220,
        total_fat: 9,
        cholesterol: 0,
        sodium: 480,
        total_carbs: 18,
        total_sugars: 9,
        protein: 17,
        ingredients: [
            "firm tofu",
            "broccoli",
            "carrots",
            "mushrooms",
            "red bell pepper",
            "green onions",
            "garlic",
            "soy sauce",
            "sesame oil",
            "brown sugar",
            "cornstarch"
        ],
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },
    {
        name: "Beef Stew",
        image: "https://www.pngkey.com/png/full/738-7380014_beef-stew-png-beef-stew-pot-png.png",
        serving_size: 4,
        calories: 340,
        total_fat: 13,
        cholesterol: 80,
        sodium: 800,
        total_carbs: 25,
        total_sugars: 5,
        protein: 30,
        ingredients: [
            "beef chuck roast",
            "carrots",
            "celery",
            "onion",
            "garlic",
            "beef broth",
            "tomato paste",
            "thyme",
            "bay leaves",
            "potatoes"
        ],
        tags: [
            "meat",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Shrimp Scampi",
        image: "https://www.pngkey.com/png/full/180-1809188_shrimp-png-shrimp-scampi-png.png",
        serving_size: 4,
        calories: 250,
        total_fat: 14,
        cholesterol: 200,
        sodium: 450,
        total_carbs: 10,
        total_sugars: 0,
        protein: 20,
        ingredients: [
            "shrimp",
            "garlic",
            "butter",
            "white wine",
            "lemon juice",
            "parsley",
            "salt",
            "red pepper flakes"
        ],
        tags: [
            "meat-free",
            "dairy",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Chicken Alfredo",
        image: "https://www.pngkey.com/png/full/314-3146079_chicken-alfredo-png.png",
        serving_size: 4,
        calories: 540,
        total_fat: 31,
        cholesterol: 190,
        sodium: 670,
        total_carbs: 33,
        total_sugars: 3,
        protein: 37,
        ingredients: [
            "fettuccine pasta",
            "chicken breasts",
            "heavy cream",
            "parmesan cheese",
            "garlic",
            "butter",
            "salt",
            "pepper"
        ],
        tags: ["meat", "dairy", "vegan-friendly", "vegetarian", "gluten"]
    },
    {
        name: "Beef and Broccoli Stir-Fry",
        image: "https://www.pngkey.com/png/full/358-3585626_stir-fry-png.png",
        serving_size: 4,
        calories: 340,
        total_fat: 14,
        cholesterol: 70,
        sodium: 850,
        total_carbs: 18,
        total_sugars: 5,
        protein: 35,
        ingredients: [
            "beef sirloin",
            "broccoli",
            "garlic",
            "soy sauce",
            "brown sugar",
            "cornstarch",
            "vegetable oil",
            "rice"
        ],
        tags: [
            "meat",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "BBQ Chicken Sandwiches",
        image: "https://www.pngkey.com/png/full/636-6361443_bbq-chicken-sandwiches-bbq-chicken-sandwich-png.png",
        serving_size: 4,
        calories: 430,
        total_fat: 8,
        cholesterol: 100,
        sodium: 950,
        total_carbs: 54,
        total_sugars: 16,
        protein: 34,
        ingredients: [
            "chicken breasts",
            "barbecue sauce",
            "hamburger buns",
            "mayonnaise",
            "lettuce",
            "tomato"
        ],
        tags: ["meat", "dairy-free", "vegan-friendly", "vegetarian", "gluten"]
    },
    {
        name: "Beef Tacos",
        image: "https://www.pngkey.com/png/full/336-3360002_taco-png-taco-food-png.png",
        serving_size: 4,
        calories: 390,
        total_fat: 18,
        cholesterol: 70,
        sodium: 450,
        total_carbs: 33,
        total_sugars: 3,
        protein: 24,
        ingredients: [
            "ground beef",
            "taco seasoning",
            "taco shells",
            "lettuce",
            "tomato",
            "shredded cheese",
            "sour cream"
        ],
        tags: ["meat", "dairy", "vegan-friendly", "vegetarian", "gluten"]
    },
    {
        name: "Vegetarian Chili",
        image: "https://www.pngkey.com/png/full/94-948268_vegetarian-chili-png-vegetarian-chili.png",
        serving_size: 4,
        calories: 270,
        total_fat: 5,
        cholesterol: 0,
        sodium: 720,
        total_carbs: 47,
        total_sugars: 12,
        protein: 12,
        ingredients: [
            "canned beans",
            "onion",
            "green bell pepper",
            "garlic",
            "tomatoes",
            "vegetable broth",
            "chili powder",
            "cumin",
            "salt",
            "pepper"
        ],
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },
    {
        name: "Shakshuka",
        image: "https://www.pngkey.com/png/full/416-4162065_shakshuka-png.png",
        serving_size: 2,
        calories: 320,
        total_fat: 20,
        cholesterol: 380,
        sodium: 580,
        total_carbs: 16,
        total_sugars: 8,
        protein: 19,
        ingredients: [
            "tomatoes",
            "onion",
            "red bell pepper",
            "garlic",
            "cumin",
            "paprika",
            "eggs"
        ],
        tags: [
            "meat-free",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Chicken Fajitas",
        image: "https://www.pngkey.com/png/full/936-9367542_fajitas-png.png",
        serving_size: 4,
        calories: 310,
        total_fat: 8,
        cholesterol: 70,
        sodium: 450,
        total_carbs: 28,
        total_sugars: 6,
        protein: 28,
        ingredients: [
            "chicken breasts",
            "bell peppers",
            "onion",
            "olive oil",
            "lime juice",
            "garlic",
            "cumin",
            "chili powder",
            "salt",
            "pepper",
            "tortillas"
        ],
        tags: ["meat", "dairy-free", "vegan-friendly", "vegetarian", "gluten"]
    },
    {
        name: "Caprese Salad",
        image: "https://www.pngkey.com/png/full/305-3055122_caprese-salad-png.png",
        serving_size: 2,
        calories: 260,
        total_fat: 22,
        cholesterol: 15,
        sodium: 180,
        total_carbs: 8,
        total_sugars: 4,
        protein: 10,
        ingredients: [
            "fresh mozzarella",
            "tomatoes",
            "fresh basil leaves",
            "olive oil",
            "balsamic vinegar"
        ],
        tags: [
            "dairy",
            "meat-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Shrimp Scampi",
        image: "https://www.pngkey.com/png/full/136-1364178_shrimp-scampi-png.png",
        serving_size: 4,
        calories: 290,
        total_fat: 13,
        cholesterol: 165,
        sodium: 350,
        total_carbs: 8,
        total_sugars: 0,
        protein: 35,
        ingredients: [
            "shrimp",
            "butter",
            "garlic",
            "white wine",
            "lemon juice",
            "parsley"
        ],
        tags: ["meat", "dairy", "vegan-friendly", "vegetarian", "gluten-free"]
    },
    {
        name: "Chicken Caesar Salad",
        image: "https://www.pngkey.com/png/full/220-2206543_caesar-salad-png.png",
        serving_size: 2,
        calories: 380,
        total_fat: 22,
        cholesterol: 85,
        sodium: 820,
        total_carbs: 12,
        total_sugars: 2,
        protein: 34,
        ingredients: [
            "chicken breasts",
            "romaine lettuce",
            "caesar dressing",
            "parmesan cheese",
            "croutons"
        ],
        tags: ["meat", "dairy", "vegan-friendly", "vegetarian", "gluten"]
    },
    {
        name: "Minestrone Soup",
        image: "https://www.pngkey.com/png/full/427-4276018_minestrone-soup-png.png",
        serving_size: 6,
        calories: 250,
        total_fat: 3,
        cholesterol: 0,
        sodium: 970,
        total_carbs: 48,
        total_sugars: 12,
        protein: 12,
        ingredients: [
            "cannellini beans",
            "onion",
            "carrots",
            "celery",
            "garlic",
            "tomatoes",
            "vegetable broth",
            "pasta",
            "basil",
            "oregano"
        ],
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },
    {
        name: "Grilled Chicken with Vegetables",
        image: "https://www.pngkey.com/png/full/24-246164_grilled-chicken-png.png",
        serving_size: 4,
        calories: 240,
        total_fat: 10,
        cholesterol: 80,
        sodium: 280,
        total_carbs: 12,
        total_sugars: 6,
        protein: 26,
        ingredients: [
            "chicken breasts",
            "zucchini",
            "yellow squash",
            "red onion",
            "olive oil",
            "garlic",
            "dried basil",
            "dried oregano",
            "salt",
            "black pepper"
        ],
        tags: [
            "meat",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Baked Salmon",
        image: "https://www.pngkey.com/png/full/390-3901177_baked-salmon-png.png",
        serving_size: 2,
        calories: 340,
        total_fat: 20,
        cholesterol: 110,
        sodium: 300,
        total_carbs: 2,
        total_sugars: 1,
        protein: 38,
        ingredients: [
            "salmon fillets",
            "olive oil",
            "garlic",
            "lemon juice",
            "dill"
        ],
        tags: [
            "meat",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Beef Stir Fry",
        image: "https://www.pngkey.com/png/full/3-37414_beef-stir-fry-png.png",
        serving_size: 4,
        calories: 300,
        total_fat: 10,
        cholesterol: 60,
        sodium: 700,
        total_carbs: 20,
        total_sugars: 8,
        protein: 32,
        ingredients: [
            "sirloin steak",
            "broccoli",
            "carrots",
            "red pepper",
            "soy sauce",
            "hoisin sauce",
            "sesame oil"
        ],
        tags: [
            "meat",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Sweet Potato Black Bean Bowl",
        image: "https://www.pngitem.com/pimgs/m/342-3424792_bowl-of-food-png-download-black-beans-and.png",
        serving_size: 2,
        calories: 420,
        total_fat: 8,
        cholesterol: 0,
        sodium: 660,
        total_carbs: 77,
        total_sugars: 14,
        protein: 14,
        ingredients: [
            "sweet potatoes",
            "black beans",
            "corn",
            "red onion",
            "avocado",
            "cilantro",
            "lime juice",
            "salt",
            "pepper"
        ],
        tags: ["vegan", "vegetarian", "dairy-free", "gluten-free", "protein"]
    },
    {
        name: "Beef Stir Fry",
        image: "https://www.pngitem.com/pimgs/m/157-1577184_stir-fry-png-transparent-png.png",
        serving_size: 4,
        calories: 360,
        total_fat: 16,
        cholesterol: 60,
        sodium: 620,
        total_carbs: 19,
        total_sugars: 8,
        protein: 35,
        ingredients: [
            "beef sirloin",
            "broccoli",
            "carrots",
            "red bell pepper",
            "snow peas",
            "garlic",
            "ginger",
            "soy sauce",
            "cornstarch",
            "oil"
        ],
        tags: ["meat", "dairy-free", "vegan-friendly", "gluten-free", "protein"]
    },

    {
        name: "Shrimp Tacos",
        image: "https://www.pngfind.com/pngs/m/139-1393235_tacos-png-images-taco-png-transparent-png.png",
        serving_size: 4,
        calories: 260,
        total_fat: 5,
        cholesterol: 130,
        sodium: 390,
        total_carbs: 36,
        total_sugars: 7,
        protein: 21,
        ingredients: [
            "shrimp",
            "corn tortillas",
            "red cabbage",
            "avocado",
            "cilantro",
            "lime juice",
            "cumin",
            "garlic powder",
            "salt",
            "black pepper"
        ],
        tags: [
            "seafood",
            "dairy-free",
            "vegan-friendly",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Spaghetti Carbonara",
        image: "https://www.pngitem.com/pimgs/m/581-5815024_pasta-png-image-free-download-pasta-png-transparent.png",
        serving_size: 4,
        calories: 575,
        total_fat: 25,
        cholesterol: 200,
        sodium: 350,
        total_carbs: 54,
        total_sugars: 3,
        protein: 32,
        ingredients: [
            "spaghetti",
            "bacon",
            "eggs",
            "parmesan cheese",
            "garlic",
            "heavy cream",
            "black pepper"
        ],
        tags: ["meat", "dairy", "gluten"]
    },
    {
        name: "Vegan Bowl",
        image: "https://www.pngitem.com/pimgs/m/90-904559_vegan-buddha-bowl-hd-png-download.png",
        serving_size: 2,
        calories: 450,
        total_fat: 22,
        cholesterol: 0,
        sodium: 480,
        total_carbs: 52,
        total_sugars: 13,
        protein: 15,
        ingredients: [
            "quinoa",
            "roasted sweet potato",
            "roasted broccoli",
            "avocado",
            "cucumber",
            "radishes",
            "hummus",
            "tahini dressing"
        ],
        tags: ["vegan", "vegetarian", "gluten"]
    },
    {
        name: "Vegan Lentil Stew",
        image: "https://www.pngfind.com/pngs/m/128-1289472_lentil-stew-png-transparent-png.png",
        serving_size: 4,
        calories: 320,
        total_fat: 6,
        cholesterol: 0,
        sodium: 840,
        total_carbs: 50,
        total_sugars: 8,
        protein: 18,
        ingredients: [
            "brown lentils",
            "onion",
            "carrots",
            "celery",
            "garlic",
            "tomatoes",
            "vegetable broth",
            "cumin",
            "smoked paprika",
            "coriander",
            "salt",
            "black pepper"
        ],
        tags: ["vegan", "vegetarian", "gluten"]
    },
    {
        name: "Vegan Cauliflower Fried Rice",
        image: "https://www.pngkey.com/png/full/299-2990423_cauliflower-fried-rice-png.png",
        serving_size: 4,
        calories: 220,
        total_fat: 10,
        cholesterol: 0,
        sodium: 480,
        total_carbs: 24,
        total_sugars: 7,
        protein: 8,
        ingredients: [
            "cauliflower rice",
            "carrots",
            "peas",
            "onion",
            "garlic",
            "soy sauce",
            "sesame oil",
            "green onion"
        ],
        tags: ["vegan", "vegetarian", "gluten"]
    },
    {
        name: "Vegan Lentil Shepherd's Pie",
        image: "https://www.pngkey.com/png/full/34-341901_vegan-shepherds-pie-png.png",
        serving_size: 4,
        calories: 350,
        total_fat: 12,
        cholesterol: 0,
        sodium: 720,
        total_carbs: 47,
        total_sugars: 7,
        protein: 15,
        ingredients: [
            "brown lentils",
            "onion",
            "carrots",
            "celery",
            "garlic",
            "tomatoes",
            "vegetable broth",
            "rosemary",
            "thyme",
            "salt",
            "black pepper",
            "mashed potatoes"
        ],
        tags: ["vegan", "vegetarian", "gluten"]
    },
    {
        name: "Gluten-Free Pizza",
        image: "https://www.pngitem.com/pimgs/m/394-3945862_pizza-png-pizza-png-transparent-png.png",
        serving_size: 2,
        calories: 750,
        total_fat: 30,
        cholesterol: 80,
        sodium: 1400,
        total_carbs: 90,
        total_sugars: 8,
        protein: 34,
        ingredients: [
            "gluten-free pizza crust",
            "tomato sauce",
            "mozzarella cheese",
            "pepperoni",
            "green peppers",
            "onion"
        ],
        tags: ["gluten-free", "meat", "dairy"]
    }
];
