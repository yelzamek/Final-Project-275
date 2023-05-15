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
        image: "https://www.simplyscratch.com/wp-content/uploads/2018/05/Balsamic-Rosemary-Grilled-Chicken-l-SimplyScratch.com-13-1200x1798.jpg",
        serving_size: 1,
        calories: 165,
        total_fat: 3,
        cholesterol: 80,
        sodium: 70,
        total_carbs: 0,
        total_sugars: 0,
        protein: 31,
        ingredients: ["chicken breast", "olive oil", "salt", "pepper"],
        tags: ["dairy-free", "gluten-free"]
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
        image: "https://www.cottercrunch.com/wp-content/uploads/2019/05/3-vegan-veggie-burgers-cc.jpg",
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
        tags: ["meat-free", "dairy-free", "vegan", "vegetarian", "gluten-free"]
    },

    {
        name: "Grilled Salmon",
        image: "https://parade.com/.image/t_share/MTkwNTgxMjE5MjE2OTI2NTg4/grilled-salmon-with-dill-butter.jpg",
        serving_size: 1,
        calories: 400,
        total_fat: 20,
        cholesterol: 100,
        sodium: 75,
        total_carbs: 0,
        total_sugars: 0,
        protein: 50,
        ingredients: ["salmon fillets", "olive oil", "salt", "pepper"],
        tags: ["dairy-free", "gluten-free"]
    },
    {
        name: "Greek Salad",
        image: "https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4.jpg",
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
        tags: ["meat-free", "vegetarian", "gluten-free"]
    },
    {
        name: "Tofu Stir-Fry",
        image: "https://www.wellplated.com/wp-content/uploads/2019/03/How-to-Make-Tofu-Stir-Fry.jpg",
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
        image: "https://www.smalltownwoman.com/wp-content/uploads/2021/02/Irish-Stew-1.jpg",
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
            "dairy-free",
            "vegetarian",
            "gluten-free"
        ]
    },
    {
        name: "Shrimp Scampi",
        image: "https://natashaskitchen.com/wp-content/uploads/2019/03/Easy-Shrimp-Scampi-Recipe.jpg",
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
        tags: ["gluten-free"
        ]
    },
    {
        name: "Chicken Alfredo",
        image: "https://www.sipandfeast.com/wp-content/uploads/2022/01/chicken-alfredo-pasta-recipe-2.jpg",
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
        tags: ["gluten-free"]
    },
    {
        name: "Beef and Broccoli Stir-Fry",
        image: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/02/beef-and-broccoli-stir-fry-7.jpg",
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
            "dairy-free",
            "gluten-free"
        ]
    },
    {
        name: "BBQ Chicken Sandwiches",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWEhISEhIYGBgYGhkYEhwYHBgYGRoaGBgcGRgcGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs1Py40NTEBDAwMEA8QHxISHz0sJCw0MTU2NDQ0NDQ0NDQ0NDQ0NDE2NjQ2NDQ0NjQ2NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDE0Mf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xAA7EAACAQIFAgQEBQMCBQUAAAABAhEAAwQFEiExQVEGImFxEzKBkQcjQqHBFFKxctEzYqLh8BUkgpLx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQMDBAMAAgMAAAAAAAABAhEDEiExBEFRExQyYSKBkaHBQlJx/9oADAMBAAIRAxEAPwD1gNSg1HSg1cglFFMmlBqAKaaaWaQ0A00A0ppDUgJpZpKJoBaKJomgENBpTSGgI3NIrUOah+IKA6ZomoA9PDUBJNE0zVRNAOops0TQBRRRUAlIpVFJNLNSB1JTddLNAFE0UlAE0UUUAUUUUAk0oNJRQCzRTZpZoBrrXM9reuo00igIlSlinkUlAMmlmlIpDQBNLNMmlmgHTRSTRUAlU0pNM3ppJqQSClLUxTTooBwNLSRRFAE0oNIabNAPmkpuqlmgFpppaQ0AhNE0hpGoB80lRg06aAWkNITRNAJNLSGkmgBhTYpdVFAFFJNJQEquKUb1ysakRjQHSFp0VzhzUqtQD6JpjNSaqAkNNamFqbqoBSacpplOWgHzRSUUAU006kNANoNFEUAlLSGiaADSEUs0k0A00lKaSgCikmigArSAGpilNJoAUU4NUZenKtAKWpRQLdP0UAylFPC0sUBGBSMKkiiKAi1Gnq9OK0wigHg0hpAaCaAKKaTShqAGFNpxNNJoAppNBamk0ATSmmM1N1UArUU1mpaA7WNRFaeKeq0BCqVKq0+KQUA6KIoooAimkU6igIiTTgafFIRQDaaafFIRQERomhqYTQCtQKQGloALVG705q5b00BMr013qBGiluGRQDWuU0XKjX1oubCTWc8kYK5MvCEpuoolN2kqC007xRXL7/GdHtJlsbwUVVWvFuF+I9p7gVl7mKyvh7A5pibbC7f0JwHA87e07AVR4r8N2+I738VK9GMavrXVqdmPpb1Z6zg82sXDFu4rH0INds14RhcxwuX3YwzG6/Dmdo/xV/e/EK+wGi2qnsSd/tU6l3Lei3wz1jVTgaw3h7xgH0pifI7cDetjbvKwBBmasmmZSi4umdFFNBpZqSo6kigGlqAIRSEUO4G5IHvXO2Nt959hVHkjHlpfstGEpcIlZaiZajbME7H9qhfMV/sP3FV9xi8ousGTwdB2pdVchx6HlWH2P80q4u2eHH12qyywfDIeKa5RO9c71KHB4IPtTCKuUI9NBqQioWNSQCWwTPQUx/mqTcwAPekuLXh9Zm1yaXCPTwR0r7Y4W1iioLl9YgsKK49X0a6WdN/FoDbtWoMmIHT3qt8XeExftGLrqwHAOzehFVfhRzbvWbZU7qS5bvHetjmWOtg6NY1dp3r3HOo2zzncXSPCsR4NuoQ62XaDGkbzHWO1dGBxFtcQj37GkrsoMbe/SvTsbmYTiNTbCenrWMzrBNdhkt6jMnSNyaz91FvS1uzphhbi5Ftl+d4X4v5gXfYQBtWwwo1ENbPlO4rDZf4Sf+la41uLpmA3StF4UuOtoLcbcfxWyaVbHPOO2xqlFMa4Jio3v/lkg1G1qYO4Mxz/AB2rPqepcHpjzyRjxJq5D7l65KhI35mpCH7/AGqJxpgkyew2mabquHhtI2iBJPuelcXuJN1Ju/CZtoVbIddsbEsR6k/zVW2IQgkXFABgxuZ9q7sZg2Kk/Gb2OmD6RH81zXMOSQNKMAQWABG/E7Gsszd0lX+zbE1W7Ew1kOCwLEDgnYHvG8mpGwhiQBNdTM5AVVCgdTsIHYUxhoEk6iePSp0xS7/b4J9STf8AoqroPBUfzVZjswVPmn/z6VcXJJkjc1U57l5a0XAkidhzxOwrlU5Xszqi49yrTPJMhY+u9WWEz1u5I7N/BFU+Eyh4BddM9OtWrYG2id61j1WSD2ZMsOOS3Rb2s4tsOx7H+DXJjs/tWwWY+1ZW7ilUxvtsDz9xTWu22MOQR3G8e4r049UskabpnBLpdErSsjxn4iuWKWLZYzANUmZeI80jdGAPavRMg8L2x5vKwbcEREHtWju5Lb0kaAfpVI4oXtG19kyyuK5p/R4PeOYOgfWd+RvNFemYnJglzSWGkyQO1FW2W2lfwjU3vbOXDHF4m5+X+Ws/MeYHarDNDbttZ1nW+pULddzua78Df20Iu5HA7VWXcud74+IhAUyDMAGa41OTab4vcmeJ66XA3xDhELa2JAWIpMkxLhZUDT0J7V3ZxjFDaUTWY3AE1jM0zi6G+GAEHQD+arOb1VDnydeLElG5/wAPQf8A1lIIJnvvVRbvKmqHkMZAHSaosswVy4VLMojeJ5960OGyqAYCEjcVHq5G0rLPFiW9F9lp/KEg7nr2muxnHVgI7mKxN7O7rK1lWCOmxVeYHY9qzmZpcYqr32LMQqLPmYkwAq8kkkCok250zJYE1quj0jGZ7hEkPfSR01D/AH3rgv8AjXLlkC/qI7Bt/uK81zzw5iLF63Yku9xFYaV21MWGgGfMQV59RVbiciK3f6c3w90iCq7KHHzJqJ3I7xGx5iuuHTbNso4wr8bZ6k/jvAwDqM9O49agTxtgixkt13EwQPbp6jtWMtfhliIHx74R23RVBfUInzMxXSTwBB3Ipz/h0UXUxdo5Hb3A/wC9Wl02Pu/8GayK9l/k9LwviLCnSf6hdxIVj5o796lxOd4YkfnJ6DUPvXko8OpHl3/zXFjMhugFrZb/ACD96q8K06b2J/G7o9afNLRkrcVjxsep4qX49tUh3Ut13B3nj6RXidvD4y2vxARHB/uBPyhlG4J3jvFQv4guTDAxMEhiCY23O9Y+xk3cXZr6sEvytHrmLzS2stqH7xVJjM61SNUD36fxXnzZijfM1xT/AKgR9tO/3qG5dubaH1D7H6zUroH3ZZ9RFcGru4xTJn2qbD3FIPcwffeP4FZC1imBGtSAOZ9P8124fMCJUPMcfX/z962XTqOyM3lvc9V8E5yE1WLh2Jm2T0P6l/n71qs2zi3at6yfavHckxdxrtsKNRnYdTtXb4ozd7jpbAI0/Op2rWM1GLTZjPFrkmjS43NlvpI5nngfTvRWbsNefQEtaQB/FFU9yv8AqdUIRSo3+Hx4RLSrahngGOn1pc0svcZAr6VJAbqT7VVYs4gKFVQ0fKeIqnTNcUlxGu7ojSQB/NcSya9pcClF6ovcmz3GNhmOiVE6Zbk+tZDMMI9xvjF9Q526e9XPjDPkxB1aSNOwFUJxhSx5f1GtYR5cSXPZav2ci5g9tiQW7Dc1c5fjcU/m1sF78VBh8tLhTcMA9q22X+Hlt6bl4kqgHw7XALfp19x10/ftWlQ7rcylJ9nscOT+GLzP8XgvuC5jV69yPWK9BwWTWFNt/hqXRfI/zNLDzEMeKpL2JvBl+GUfzH4wbZ4IMEHjYkbGNug2qfB5te1LZTTOrSWcNKAyRsYnoP8AMV0QhXyX/lbnHkyO6W50eKLq2kW4qBrsMlsn9AI87TzwP81jfDGRo2LS9imX4lx9VhIgNpXU3lHYRseumed7x7L33uXh+aVZraBmCaVCr8sERqBYk99P0bk2TXl/OxCWbbq3/tgvnNpeggQuomJgmY54jpyTUI6TZT9ODj3Zd5+nli+r6J/4iDUVB6MvQSB/jesdmvi2zhQyW3LPpB07hW6KQrCZMb8e5r0l21odJBI2YevX+awOdeGVGIfSyIjqHIuBWXyDS0Bvl/RwRH7Vm3FO6OeHhnBlWJvYn8y5ZsDUoe3p1hm38wZgYBAjoetaoZBaZAwYkbagOncbiayGXWrGGuvfFhna2hYlHZytskBnVGb5dxxO01rMHjjcs/1S61tOmpVIGtyCVEoJI4MbyZ4quRw0txN6epIx/jQxadE1MVUA/DUyqqrSzxsE3QHtPrWLynJxdtFWITWxILdlChSPqW+1bDNs8w9q5iEt32JfUjhbes+aA4bUYYeWBGw6dDUeSZFbvS7Notp5EAMEBTGo79TLfWrKDjjS7muZpLcyN7wgyOqnE2GmTBYoSByRI4Gxmu8/h9jIVrD23Vt1hz16zEEV1Z1iLeCxFy3h3+O5tqpuXNMp5iSqqvoVP3+lQviPMFYN8cqpXYMo0x9BMetXSlJWc2lpaok2aeDcwtI73LasiKXdldTAAkmCQdu0dKzCnSRufXt7Cr3F5jjcRac3LhNsOqsV2QEgkSB8wPrNQYfJhNt7rSrCQFVzJmNJbTE7dKlQklwXjGUlaRd+EbwS4mIuqwQSEIE+bvHbmtdisos4ki/bLK3UHr61l8Jig35YEaf0EEFQP+U1qcqxkDn2rysrkptNUb7x3J0wj2hpBmitPhUS4pLDzbTH+aSuf05+TX3EfAPh7sR8M/Qiq/EZddby/BkdeKQ+JtLFGBVgYYHkU5fE3/OK9J9JjfdnAs812RTYzwlffVptqJ7mo7XgK7pAZkXqeTV1c8Sjo/71z3M/WJNwferx6bFHz/RLPkfYltZKLIS4XVim4AWd+AR6iup81VDre0WVUZtTMmlNI3LKSNz05rPX/Etsc3BV0uAS9ZK3Jm4oYiYCqd/q0fz2NUyQhGWpfpFo6prS/wBv6PPr3iotibb3JW1rHx2tg6oPPnHIBKnTweI3rb5zicLh2bEfFCXArLbRn0zr8ouMgPmIUkgnfePQVeZZUmGwzJZht2dXfT+W6AOORvJAIETsaxWL8O4/EXPj3PM9xiQNQ1bb7D9K9q0hkjV2aLBp+K2IL+a45bvx7TPbSNCNsU0gyJJ8skkn6xXofgXxE9+4tvEH4hFsMWRWCodYUayQBBDKZB6EVm8hw15Py0vXF3/MBINssAfJoaVjcbkb+g53OEx+HwdhLlwBWvtrs2082wXcGBsgYsQBwXAprjN347lcuFp27bfY3OtE6QDJJ6dySaw/4gY/CNh2F1yp3NrQRr1rMMo7dD6E1zY/xHiGRXDItp9RdgC2hV3DLv8ANtEH36VBh8rw72DiIV2eBrbzNp5Ik78RtVM2So3wiuHC9SbMjleYWcNeTEO10nSQ0MCXDCCrSOIJ+wrUZj4rwq27S2LgKQo0mZUgA6SIjVBPpNZjNcvK30+Ih+DsztMDQdyJkQenTms/iGsWmuFSt06mFlQCVC92Y8wOBvvvJrKEHKKuztyyipbLsV2LuXfiG63Rp1bQSIg+omKvfC2ZYq2C9xLj2HBXVpJAPMjqR3qofEfEuJ8fy2yRIQRpEiYXvHTavYcHYw2Hw+u2BpYSQo2Gpdo7AQK3y53BK+WcyxSm25fw8YzPGs+Ja+qhT5dMAD5FA1EdzEme9X+JNvELhbfxkRgjKTDspO3Pl1KSOQdv55M6uKXJgCT04nvVa+pQGVoInpuAeYnirwzSa22NFi0cbo2OWIvwxgWC21LlmvoVdGFvzKxA3WZBljGw25q7w+S2bSKrY5XtXG0rMOCdyQsTB2J+leXYi+ypaKsR8x2MfqI3j0gVY5fmDMVLlj23I39DO43mK39ZxjdGKe9RdF/hLNiw9x7xDtDoick6gPNIPl0iRJ332Aiu7LXLMrHYdAOKzVuwGJZXmJkdRvv7j2rU5PgH0hnkLyB1P+1eZ1WR5Gm+xupN8m0ye9BI9OKKq7TOQfhKSdo9Y53papCLatGUqs1xsWjDNbtuwHl1Ksn6tx96o8F4fw129c/qcMVdvlCM4tkdSIAANdVon/vVpgtRBMmB/FesqfY4Xt3PLfxC8HX8O4vYRnNkiHWWZkbfeT+k7ddqwoweLbkvX0Rhc2+JcxFpk8qAQxBhg4OxBEHg8SK5MNkmGYnSoEHiKOKJUvJ4vkPg/EYm6FZmVANV1zJ0oOY7k8CvX7q/0tqUUuioADJLCAq77yTAO/JJFXlvLVS1dS2oBInbrHAqkwOYidFxdQDSO4YHgjrvvHtXF1myV/06emt21v8ARXZnnFh0tKqF38rKoGsq8N8w41LvsevtR/UFbfxL9gFg6a5ChwrSqkEECTEzPf2rNeNMW9rFs2HCjWiuTp3k6hqBEGTwfYV0+GLeY6L164CwOgpq58pYFQvJUgmTtx9Ryaf+V/o7eIrajSvg1ZVKjQQSy6lUGdSmNI2PynfqTXBj8vtPdS7ftBmCqilQYIUliApXY+ZuCOTUOJzxTq0Eq0Nq1SXUCdkRgAZ4nfp2qmGMLr8N3ZDKsjzBM7aTGwBO0d6o5NfEuo+SyxWQWtFxIZAzhiPiDcyAPKNUdvX/ABeZPgkS29pFJ82pVksPlVBEgf2/vNQWMntWfzfM7qGIBZn1QCQBqO52FdLZjbwtkm9dVrpA16SOYGyqPp7ma0k9qbso5Wth1zKBoZsRdAMEQI0hYOxJMGAfavIfEVq2LhFiNAMBtyCOJmIq6zfxa9+4qXV02A3nQMQzid9Tbfbj3rSZO1r+k1GGRiwUaZ+XoxB3Ox243NXc3CpPshDuvJ5/4dtL8dPi2jcsvCsAYILHSrD1BrcZsr2rb2LKl0ZGCNPBG+4jykAGQeYPHFUuLwVn4iXcOujUwICGFaDMKsiG52H2qxzzORbBxNpYZWUspPlknSyso+h71XJPW40uWSk43ZgMVhrgDM5JggMeYPQj7GoHYsCJEAbsdvpVvezdntspOi227AnmTMAbajtVDdvF2AAhZ2H+9duO2vyVUYSkltF8jjdBaAJVRA25A3n967sHfe4QiqJB252/0jvE7+tPw0Ww8DciGIHG0x7VDkb3lu67bEFPmIk7cHeplJNN+CqhJNJ9y8uZe9t4ZjqHMn0ndTwav/D+ZPPw3IIPBHes9imco7hld2BZyR5gApJgnt/Fc+WYoQHRpIkkGAeONq5JRclqLycY/iz0uziSh1qeNgfcbyP2orFWvEisNPDdjuD1JFFKkttzGz1nDYY7Cl8SYxrGHGgeZiqJwPO5Cp80A7kbVbYayNjFMznL0u2tL8qyOhHR0YMp9dwNuteqkcLZR4DCjCYcW7jq11iXuR5QXcztPbiesdKhw2LQ3GTUQRyVPB6jsavMxwa4i20eW4khW/tYrzHBG4rzzLcTi8Lce2yFrqnzFVRm0ncsiE+cRp4YE+fsAWltkqSSPQcHjXVnS4GgAMHIIQqdt24mosdlAdvj4eNXJBMK5G3I4Pr6VkmxV244IdllnW04OpixBJWyz+YOAGnD3AQd4IgVd+Hs+tW7fw7txZDlZgopJ/tVt1E7aTxEdKZcMZxqQx5JRlcSBsutG8jXkKlSYVhsdy2x4In6Vp1v2zAEAn6f/vNTJiLV0QdLA94IqJ8ptmdJKzyOQfvuPoa8/wBrPHeimvvk6pdQslarVfwrs2yOzdRluWlef+UcDiO8Vk7vgUMrIrMik7wIErxpE7Dfp9ZrfWsLcWJYNHB4P70X0Y9G+2319KzeGfypr6Lxz1smmY2xau2kZLt0OqR8MlTqUAMDLg+wG3WsjmuOw999DqVWfKWkqCRE6tgK9SxGDSGLBRPME/sI2rJ4rIFE/Dc8HYwy1zNTT3OmGVVsed4jCYe07I5Z2A8hRx14DKZmrjL7hQJbsFHDoWIYxpcjygGJBJ5G4G0R1s8V4YEAhEYwC0eVoO20+9V7+GnXzKGG+2lgY67A8Vpr1RpjUrtHXm+AAwujR82l0IJgMOs/eeP3rNs9u/bW2botgFfigCZhtyQNy20+sj6akYy4lrTdSX5iQJ22eR8pPUf96yTZYrMXuFFElmKkAzMwF7/SmKk6b43RMnqV/wBOLOcObrO6IyW1GmyIO4WBue+1V2HRUXU3O8Ke/tVhfxb6tFkuF3CKpljHU8yTVday/FXTNvD3nJ6qjt+4Fd+NSap8HPKUIu+5PluY2w/56kqWklfmWdjseRXKmJ03Ga3IWTE7kqeA0bHaKuMF4JzC4BOGKLvvcZbfXqGOr7LWlwv4fsqqt/FIkfMLam4Tz1MAH71o4JbpcmLzPhvgqHzLArhlNtibuhhcDKxJZlgqDwFk7GqHJ8oxWIbTh7TMCd2iEX3c7Dnjn0r03B+FstskH4RvsP1Xm1DvOgQv7VbsbjDSAFTeFAAAEcAAVEMcY39lMmWUmZ/IfC9nCDXdYXbxEEj5VnkL/v8A44oq3bFWkMTqbrHH3orSzPc9KRdqTEXNKMYkgGBtvt67fepCNqz+eYxgCi/q8sbEb95/89DWi5KMkyXEl1u3GIC/Kh4G25gckCQJ69ABFUucYe3duWy4HlbYkA7DfaevY9JJFX2XYEf0wtM+8sWPWWOreeu4rP5zkN3WFR9wPJ0B7g0k3ewilW5a4OzhU3VdTFQrM5LswB21k/OR0YyfWvNvxfvxdsG2sBgzMQIlkIAkjrBrV4PAXAdLkgjkD+O9Vv4j5WDgQ5ksjAr2OoFTPtM+4HrVNTfJakuDz/IPHF7DsA8svEqd49jsf2r1Xw9+IGEv6VF5Vc/pfyNPpOx+hNeM2PDl1xqA/akueGL4/TUpho+lbePBE1Ot+etfOOBxOZ4aPhXnAH6SSy+0GtBgvxGx6bXrCv6rKH7daWRpPcNfrP2pjEdQD7gV5fhfxUsn/iI6d5WR/wBM1c4b8QcA0fnqP9UD/JFLQpmuvom5+Gp2/tX/AGrgu2bZP/DT/wCq1WL4wwbcX0PsVP8Ag1IM+wh4vp9ZqrUH4LLUjpfC25/4Vs+6KT/ioWwluSfg2+dvIn3O1RPnmE3nEIfrVbd8W4NdjcUKNp1L+wJmlQQ/JluVIEIAv+lQv8VFfuXIjUfvWdxnj3BqDouBj7iP+map8Z+JNj9FtmP2H2IFTsRTNfdViCJI70htACWIHaTXmGM8b33J0JHYsx/wsf5qovZpibh89xoPQeUftufqTVbZNHpmZ+I8LZlQQ79l3A9yKz+K8RXbu06F7LtPuay2GsmrHDpVWy6ikXOHvGkqLDITwDS0B71iJ0mKzOICald52O8evr0FWubZkqI0GYBrCWc1uOxUjYt/PvXQjBm7AtyrK8dTvMj2qTH310grBI39aorexB9Krs9zJ1tutrd4MR0NU1WW0l06Mw1r8/OmREdiY5rPZ1ijds3LNy2VbywGO8yCPed4IJGx6gxzeHvEjH8rFAowIQMdgSLYdpJ/+W422rQ48W3CAldTFdDbTGoNse1TVci/Bw5HkZRF1CrtcntkbqKtMOg0ip1WpIM/d8PWz+gVXYnwlaP6a2YWgpUUTZ5li/Ats8LVJi/w/HRa9mNsdqjbDKelRpJs8ExHgNhwtVt7wbdHANfRD4FD0qF8sQ/pFRTGpHzm/hW8P0n7Uw+Gr39v7V9ENk9v+0Uxskt/2ippk6kfPa+HLn9pqdPDlz+0/avexkVv+0V14fJbKidAJ9qpLZEppngdrw5c/sNWGH8M3P7a9su5ZaAJ0Cq572HQw2x6Cs1KPdl6b4R5xhvClzqKt8L4TAiRWtbMra/LbY/Q1CM/HS2ftT1IeRokcuF8PKv6aKtctzG69yDb0iDSU9WJGhmQy/Mb95tF+wyMx3PSK0GGyhEOs8DesRnPihrbILC62mTHAFQYzxPmGJt/DS2LQOzN1+laxexRxNbmmPZpFphAkE9apLmIVAXuXBtuaqcsy6+gh7zGeeP81ZWcstjcjUe7b1WrLcFbezK7ibipYsNCyFdtp1AgmDxzXoOQZEV0XL7a3AAHZQOgqvybChTIEVrMNWi4M3yWFsRxUoqJKkWrED6WkFAoBaKKKAQ0UUjGKgBFQX8SiCWYVWZpnASVXms9cuO0tcY+1YTzqOyNoYW95GoweZrcuFE3A5NWkVS+HLIW3qAjVvV1Wam5K2JRUXSIr52qj/pUa8rkDarm9VNiJDSK480qkmbY42qLV7SRECqLE5f59mgVYfEdgI2rjxNm7zWOTLJbxRpCC4kzqwGG0tMztRUWE1iJ4iipjmbVsSx77GHw2UW1GyCupcD2FaxcqjpUoy30r2VE4nIx4wbdq7sNlpPNaVMuHaum3goqyiQ5Fbg8FHSrWzaqdLEVKqVYqNRKkC0oFLFANililIooBIoilpKgCRVbmuK0ggVZmqDOFJ1Vlmk1HY1wpOW5mmeXLE+1cuOxBgKOpigEyR610YDBh7qluBXny4s6r3Ndk5C20B7VYPeHSq9FAG1PU1EZtKikopuyR71QuuqhzSK1Yylbpl4quBFUip5JFMg00XY2pFpbMNNjvSioWc0lZN7l6LkiiKKK+hPNAU4UUVIHCiiigFFFFFAFJRRUABRRRQAap8wHzUUVjn+Jth+Rj8QPzDXbhdjtRRXFL4s6H8i5sOe9dYoornJInqS0OKKKzj8i74OpxtXDc5ooq+bkpAevFFFFFwSf/9k=",
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
        tags: ["dairy-free", "gluten"]
    },
    {
        name: "Beef Tacos",
        image: "https://mytherapistcooks.com/wp-content/uploads/2018/04/IMG_6064.jpg",
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
        tags: ["gluten-free"]
    },
    {
        name: "Vegetarian Chili",
        image: "https://www.nospoonnecessary.com/wp-content/uploads/2020/02/3-Bean-Vegetarian-Chili-86.jpg",
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
        image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19-300x300.jpg",
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
        image: "https://cdn.nutritioninthekitch.com/wp-content/uploads/2021/01/IMG_4840.jpg",
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
        image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-2-300x300.jpg",
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
        name: "Chicken Caesar Salad",
        image: "https://www.theroastedroot.net/wp-content/uploads/2020/06/chicken_caesar_salad_7.jpg.webp",
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
        image: "https://3.bp.blogspot.com/-lrdFw_R_rvg/UN0wLpqoOnI/AAAAAAAAO9g/Pj1_o1zMhQU/s800/Minestrone+Soup+with+Spinach_AestheticNest_DSC_9052.jpg",
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
        image: "https://simply-delicious-food.com/wp-content/uploads/2019/04/30-minute-grilled-chicken-and-vegetables-1.jpg",
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
        image: "https://www.diversivore.com/wp-content/uploads/2018/12/Honey-Dijon-Baked-Salmon-mobile-square.jpg",
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
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Colorful-Beef-Stir-Fry_EXPS_FT20_32435_F_0109_1-3.jpg",
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
        image: "https://www.skinnytaste.com/wp-content/uploads/2022/02/Roasted-Sweet-Potato-and-Chipotle-Black-Bean-Bowls-7-2.jpg",
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
            "pepper",
            "rice"
        ],
        tags: ["vegan", "vegetarian", "dairy-free", "gluten-free", "protein"]
    },
    {
        name: "Shrimp Tacos",
        image: "https://www.shepaused4thought.com/wp-content/uploads/2020/01/tacossq.jpg",
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
        image: "https://kelseynixon.com/wp-content/uploads/2017/01/02-12_TJ-spaghetti-carbonara-scaled.jpg",
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
        image: "https://realandvibrant.com/wp-content/uploads/2019/05/Vegan-Power-Bowl-3.jpg",
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
        image: "https://choosingchia.com/jessh-jessh/uploads/2021/09/Lentil-Stew-7.jpg",
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
        image: "https://peasandcrayons.com/wp-content/uploads/2019/03/vegan-cauliflower-fried-rice-recipe-4.jpg",
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
        image: "https://rainbowplantlife.com/wp-content/uploads/2020/11/137_image-asset.jpg",
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
        image: "https://minimalistbaker.com/wp-content/uploads/2013/05/The-Best-Gluten-Free-Pizza-Dough.jpg",
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
    },
    {
        name: "Potato Salad",
        image: "https://b1319836.smushcdn.com/1319836/wp-content/uploads/2020/08/healthy-potato-salad-3.jpg?lossy=0&strip=1&webp=1",
        serving_size: 6,
        calories: 200,
        total_fat: 8,
        cholesterol: 20,
        sodium: 320,
        total_carbs: 30,
        total_sugars: 4,
        protein: 4,
        ingredients: [
            "potatoes",
            "hard-boiled eggs",
            "mayonnaise",
            "celery",
            "onion",
            "mustard",
            "salt",
            "pepper"
        ],
        tags: ["dairy"]
    },
    {
        name: "Baked Potatoes",
        image: "https://noshingwiththenolands.com/wp-content/uploads/2020/09/Chicken-Taco-Loaded-Baked-Potatoes-large-6-1.jpg",
        serving_size: 4,
        calories: 160,
        total_fat: 0.2,
        cholesterol: 0,
        sodium: 10,
        total_carbs: 36,
        total_sugars: 2,
        protein: 4,
        ingredients: [
            "potatoes",
            "olive oil",
            "salt",
            "pepper",
            "sour cream",
            "chives"
        ],
        tags: ["dairy", "vegan", "vegetarian", "gluten"]
    },
    {
        name: "Chicken Tenders and Fries",
        image: "https://i.pinimg.com/originals/c2/bc/bb/c2bcbb05f7a82b38af24d97e8e26b452.jpg",
        serving_size: 4,
        calories: 500,
        total_fat: 24,
        cholesterol: 70,
        sodium: 870,
        total_carbs: 40,
        total_sugars: 0,
        protein: 30,
        ingredients: [
            "chicken tenders",
            "breadcrumbs",
            "flour",
            "eggs",
            "potatoes",
            "vegetable oil",
            "salt",
            "pepper"
        ],
        tags: ["meat"]
    },
    {
        name: "Butter Chicken",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/04/Butter-Chicken-square-FS-34.jpg",
        serving_size: 4,
        calories: 420,
        total_fat: 22,
        cholesterol: 95,
        sodium: 650,
        total_carbs: 14,
        total_sugars: 9,
        protein: 40,
        ingredients: [
            "chicken breasts",
            "yogurt",
            "tomato sauce",
            "heavy cream",
            "butter",
            "garlic",
            "ginger",
            "garam masala",
            "turmeric",
            "cumin",
            "cayenne pepper",
            "salt"
        ],
        tags: ["meat"]
    },
    {
        name: "Vegetable Gyros",
        image: "https://biancazapatka.com/wp-content/uploads/2022/05/pilz-gyros-vegan-720x1008.jpg",
        serving_size: 4,
        calories: 300,
        total_fat: 12,
        cholesterol: 0,
        sodium: 800,
        total_carbs: 40,
        total_sugars: 8,
        protein: 10,
        ingredients: [
            "pita bread",
            "zucchini",
            "yellow squash",
            "red onion",
            "red pepper",
            "tzatziki sauce",
            "olive oil",
            "lemon juice",
            "garlic",
            "dill",
            "oregano",
            "salt",
            "pepper"
        ],
        tags: ["dairy", "vegan", "vegetarian", "gluten"]
    },
    {
        name: "Falafel Wrap",
        image: "https://cdn.doordash.com/media/photosV2/73416a0c-1094-4337-ae27-6dcf4c7d421e-retina-large.jpeg",
        serving_size: 4,
        calories: 320,
        total_fat: 10,
        cholesterol: 0,
        sodium: 700,
        total_carbs: 45,
        total_sugars: 5,
        protein: 15,
        ingredients: [
            "falafel",
            "whole wheat wrap",
            "cucumber",
            "tomatoes",
            "red onion",
            "tahini sauce",
            "lemon juice",
            "garlic",
            "salt",
            "pepper"
        ],
        tags: ["vegan", "vegetarian", "gluten-free"]
    },

    {
        name: "Grilled Vegetable Bowl",
        image: "https://dishingouthealth.com/wp-content/uploads/2021/02/RoastedVeggieGlowBowls_Square.jpg",
        serving_size: 4,
        calories: 280,
        total_fat: 8,
        cholesterol: 0,
        sodium: 420,
        total_carbs: 45,
        total_sugars: 10,
        protein: 10,
        ingredients: [
            "quinoa",
            "grilled zucchini",
            "grilled yellow squash",
            "grilled red onion",
            "grilled red pepper",
            "avocado",
            "cilantro",
            "lime juice",
            "olive oil",
            "salt",
            "pepper"
        ],
        tags: ["vegan", "vegetarian", "gluten-free"]
    }
];
