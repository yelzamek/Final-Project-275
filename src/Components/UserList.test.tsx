/*import React from "react";
import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";
//import { Meal } from "../Interfaces/MealObject";

const currentUser = {
    name: "John",
    list_of_items: [
        {
            name: "Spaghetti",
            image: "",
            serving_size: 1,
            calories: 200,
            total_fat: 10,
            cholesterol: 20,
            sodium: 300,
            total_carbs: 30,
            total_sugars: 2,
            protein: 8
        }
    ]
};

const mealList = [
    {
        name: "Spaghetti",
        image: "",
        serving_size: 1,
        calories: 200,
        total_fat: 10,
        cholesterol: 20,
        sodium: 300,
        total_carbs: 30,
        total_sugars: 2,
        protein: 8
    },
    {
        name: "Pizza",
        image: "",
        serving_size: 1,
        calories: 300,
        total_fat: 15,
        cholesterol: 25,
        sodium: 400,
        total_carbs: 35,
        total_sugars: 3,
        protein: 10
    }
];

const userType = "User";

const userList = [
    {
        name: "John",
        list_of_items: [
            {
                name: "Spaghetti",
                image: "",
                serving_size: 1,
                calories: 200,
                total_fat: 10,
                cholesterol: 20,
                sodium: 300,
                total_carbs: 30,
                total_sugars: 2,
                protein: 8
            }
        ]
    }
];

const setCurrentUser = jest.fn();
const setUserList = jest.fn();

const props = {
    currentUser,
    setCurrentUser,
    mealList,
    userType,
    userList,
    setUserList
};

describe("UserList", () => {
    it("renders a title", () => {
        render(
            <UserList
                setMealList={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
                {...props}
            />
        );
        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("renders the current user's items", () => {
        render(
            <UserList
                setMealList={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
                {...props}
            />
        );
        expect(screen.getByText("Spaghetti")).toBeInTheDocument();
    });

    it("removes an item from the user's list when the 'X' button is clicked", () => {
        render(
            <UserList
                setMealList={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
                {...props}
            />
        );
        const removeButton = screen.getByRole("button", { name: "X" });
        removeButton.click();
        expect(setCurrentUser).toHaveBeenCalledWith({
            name: currentUser.name,
            list_of_items: []
        });
    });

    it("adds a meal to the current user's list when a meal is dropped on the component", () => {
        render(
            <UserList
                setMealList={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
                {...props}
            />
        );
        const component = screen.getByText("Title");
        const meal = mealList[1];
        const dropEvent = {
            preventDefault: jest.fn(),
            dataTransfer: { getData: () => JSON.stringify(meal) }
        };
        component.dispatchEvent(new DragEvent("dragover"));
        component.dispatchEvent(new DragEvent("drop", dropEvent));
        expect(setCurrentUser).toHaveBeenCalledWith({
            name: currentUser.name,
            list_of_items: [...currentUser.list_of_items, meal]
        });
        expect(setUserList).toHaveBeenCalledWith([
            {
                name: "John",
                list_of_items: [...currentUser.list_of_items, meal]
            }
        ]);
    });
});
*/
export {};
