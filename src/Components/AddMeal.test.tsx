/*import React from "react";
//import { fireEvent, render, screen } from "@testing-library/react";
import { AddMeal } from "./AddMeal";
import "@testing-library/jest-dom/extend-expect";
//import { Meal } from "../Interfaces/MealObject";
//import { shallow } from "enzyme";
import { fireEvent, render } from "@testing-library/react";

describe("AddMeal", () => {
    const mealList = [
        {
            name: "Test Meal",
            serving_size: 1,
            calories: 100,
            total_fat: 10,
            cholesterol: 20,
            sodium: 30,
            total_carbs: 40,
            total_sugars: 50,
            protein: 60,
            image: "test.jpg"
        },
        {
            name: "Test Meal",
            serving_size: 2,
            calories: 200,
            total_fat: 10,
            cholesterol: 30,
            sodium: -1,
            total_carbs: 40,
            total_sugars: 10,
            protein: 20,
            image: "https://testimage.com"
        }
    ];
    const setMealList = jest.fn();
    const userType = "superUser";*/

//it("adds a new meal to the mealList state when createMeal is called", () => {
// Create a mock meal object
/*const mockMeal = {
            name: "test meal",
            serving_size: 1,
            calories: 100,
            total_fat: 10,
            cholesterol: 20,
            sodium: 30,
            total_carbs: 40,
            total_sugars: 50,
            protein: 60,
            image: "test.jpg"
        };*/
// Set the state values to the mock meal values
//});
/*
    it("should create a new meal object", () => {
        const { getByLabelText } = render(
            <AddMeal
                mealList={mealList}
                setMealList={setMealList}
                userType={userType}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );

        fireEvent.change(getByLabelText("Name:"), {
            target: { value: "Test Meal" }
        });
        fireEvent.change(getByLabelText("Serving Size:"), {
            target: { value: "1" }
        });
        fireEvent.change(getByLabelText("Calories:"), {
            target: { value: "100" }
        });
        fireEvent.change(getByLabelText("Total Fat:"), {
            target: { value: "10" }
        });
        fireEvent.change(getByLabelText("Cholesterol:"), {
            target: { value: "20" }
        });
        fireEvent.change(getByLabelText("Sodium:"), {
            target: { value: "30" }
        });
        fireEvent.change(getByLabelText("Total Carbs:"), {
            target: { value: "40" }
        });
        fireEvent.change(getByLabelText("Total Sugars:"), {
            target: { value: "50" }
        });
        fireEvent.change(getByLabelText("Protein:"), {
            target: { value: "60" }
        });
        fireEvent.change(getByLabelText("Image:"), {
            target: { value: "test.jpg" }
        });
    });
});*/
export {};
