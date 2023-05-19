import React from "react";
import { render, screen } from "@testing-library/react";
import { SortFunction } from "./SortFunction";
//import { MEAL_LIST } from "../Interfaces/MealObject";

test("initial sort option is set to 'Alphabetical'", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<SortFunction mealList={[]} setMealList={() => {}} />);
    const selectElement = screen.getByLabelText("Sort by:");
    expect(selectElement).toHaveValue("Alphabetical");
});
/*
test("selecting 'Reverse Alphabetical' sorts the meal list in reverse alphabetical order", () => {
    const mealList = [MEAL_LIST[0], MEAL_LIST[1]];
    const setMealList = jest.fn();
    render(<SortFunction mealList={mealList} setMealList={setMealList} />);
    const selectElement = screen.getByLabelText("Sort by:");
    fireEvent.change(selectElement, {
        target: { value: "Reverse Alphabetical" }
    });
    expect(setMealList).toHaveBeenCalledWith([
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
            serving_size: 1,
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
            tags: [
                "meat-free",
                "dairy-free",
                "vegan",
                "vegetarian",
                "gluten-free"
            ]
        }
    ]);
});*/
