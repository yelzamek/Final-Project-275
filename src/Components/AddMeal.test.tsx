import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddMeal } from "./AddMeal";

test("AddMeal updates name input correctly", () => {
    const setMealListMock = jest.fn();
    const setUserType = jest.fn();
    const { getByLabelText } = render(
        <AddMeal
            mealList={[]}
            setMealList={setMealListMock}
            userType=""
            setUserType={setUserType}
        />
    );
    const nameInput = getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "New Meal" } });
    expect(nameInput).toHaveValue("New Meal");
});
test("AddMeal updates serving size input correctly", () => {
    const setMealListMock = jest.fn();
    const setUserType = jest.fn();
    const { getByLabelText } = render(
        <AddMeal
            mealList={[]}
            setMealList={setMealListMock}
            userType=""
            setUserType={setUserType}
        />
    );
    const servingSizeInput = getByLabelText("Serving Size:");
    fireEvent.change(servingSizeInput, { target: { value: 2 } });
    expect(servingSizeInput).toHaveValue(2);
});

test("AddMeal updates calories input correctly", () => {
    const setMealListMock = jest.fn();
    const setUserType = jest.fn();
    const { getByLabelText } = render(
        <AddMeal
            mealList={[]}
            setMealList={setMealListMock}
            userType=""
            setUserType={setUserType}
        />
    );
    const caloriesInput = getByLabelText("Calories:");
    fireEvent.change(caloriesInput, { target: { value: 500 } });
    expect(caloriesInput).toHaveValue(500);
});

test("AddMeal updates cholesterol input correctly", () => {
    const setMealListMock = jest.fn();
    const setUserType = jest.fn();
    const { getByLabelText } = render(
        <AddMeal
            mealList={[]}
            setMealList={setMealListMock}
            userType=""
            setUserType={setUserType}
        />
    );
    const cholesterolInput = getByLabelText("Cholesterol:");
    fireEvent.change(cholesterolInput, { target: { value: 20 } });
    expect(cholesterolInput).toHaveValue(20);
});

test("AddMeal updates total sugars input correctly", () => {
    const setMealListMock = jest.fn();
    const setUserType = jest.fn();
    const { getByLabelText } = render(
        <AddMeal
            mealList={[]}
            setMealList={setMealListMock}
            userType=""
            setUserType={setUserType}
        />
    );
    const sugarsInput = getByLabelText("Total Sugars:");
    fireEvent.change(sugarsInput, { target: { value: 20 } });
    expect(sugarsInput).toHaveValue(20);
});
