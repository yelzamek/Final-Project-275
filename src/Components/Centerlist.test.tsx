/*import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CenterList } from "./Centerlist";

const mealList = [
    {
        name: "Chicken Parmesan",
        image: "https://www.example.com/chickenparmesan.jpg",
        serving_size: "1 cup",
        calories: 320,
        total_fat: 10,
        cholesterol: 60,
        sodium: 720,
        total_carbs: 30,
        total_sugars: 6,
        protein: 28
    },
    {
        name: "Grilled Salmon",
        image: "https://www.example.com/grilledsalmon.jpg",
        serving_size: "1 fillet",
        calories: 420,
        total_fat: 22,
        cholesterol: 90,
        sodium: 580,
        total_carbs: 0,
        total_sugars: 0,
        protein: 48
    }
];

describe("CenterList", () => {
    it("should display a list of meals", () => {
        render(
            <CenterList
                mealList={mealList}
                setMealList={() => null}
                userType="admin"
            />
        );

        const chickenParmesanElement = screen.getByText("Chicken Parmesan");
        expect(chickenParmesanElement).toBeInTheDocument();

        const grilledSalmonElement = screen.getByText("Grilled Salmon");
        expect(grilledSalmonElement).toBeInTheDocument();
    });

    it("should sort meals alphabetically when 'Alphabetical' is selected in the sort dropdown", () => {
        const setMealListMock = jest.fn();

        render(
            <CenterList
                mealList={mealList}
                setMealList={setMealListMock}
                userType="admin"
            />
        );

        const sortDropdownElement = screen.getByLabelText("Sort by:");
        userEvent.selectOptions(sortDropdownElement, "Alphabetical");

        expect(setMealListMock).toHaveBeenCalledWith([
            {
                name: "Grilled Salmon",
                image: "https://www.example.com/grilledsalmon.jpg",
                serving_size: "1 fillet",
                calories: 420,
                total_fat: 22,
                cholesterol: 90,
                sodium: 580,
                total_carbs: 0,
                total_sugars: 0,
                protein: 48
            },
            {
                name: "Chicken Parmesan",
                image: "https://www.example.com/chickenparmesan.jpg",
                serving_size: "1 cup",
                calories: 320,
                total_fat: 10,
                cholesterol: 60,
                sodium: 720,
                total_carbs: 30,
                total_sugars: 6,
                protein: 28
            }
        ]);
    });
});
*/
export {};
