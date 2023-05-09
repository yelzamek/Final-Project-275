import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MealDraggable, DropBox } from "./Draggable";
import { Meal } from "../Interfaces/MealObject";
//import drag from "@testing-library/user-event";
//import drop from "@testing-library/user-event";

describe("MealDraggable component", () => {
    const meal: Meal = {
        name: "Burger",
        calories: 500,
        protein: 25,
        image: "",
        serving_size: 0,
        total_fat: 0,
        cholesterol: 0,
        sodium: 0,
        total_carbs: 0,
        total_sugars: 0
    };

    it("renders the meal name", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <MealDraggable {...meal} />
            </DndProvider>
        );
        expect(screen.getByText(meal.name)).toBeInTheDocument();
    });

    it("can be dragged", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <MealDraggable {...meal} />
                <DropBox />
            </DndProvider>
        );
        const draggable = screen.getByText(meal.name);
        fireEvent.drag(draggable);
        const dropBox = screen.getByTestId("colored-box");
        fireEvent.drop(draggable, dropBox);
        expect(screen.queryByTestId("colored-box")).not.toBeInTheDocument();
    });
});

describe("DropBox component", () => {
    it("renders a green box", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <DropBox />
            </DndProvider>
        );
        const coloredBox = screen.getByTestId("colored-box");
        expect(coloredBox).toBeInTheDocument();
        expect(coloredBox).toHaveStyle("background-color: green");
    });

    it("disappears when a meal is dropped on it", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <MealDraggable
                    name="Pizza"
                    calories={800}
                    protein={35}
                    image={""}
                    serving_size={0}
                    total_fat={0}
                    cholesterol={0}
                    sodium={0}
                    total_carbs={0}
                    total_sugars={0}
                />
                <DropBox />
            </DndProvider>
        );
        const draggable = screen.getByText("Pizza");
        const dropBox = screen.getByTestId("colored-box");
        fireEvent.drag(draggable);
        fireEvent.drop(draggable, dropBox);
        expect(screen.queryByTestId("colored-box")).not.toBeInTheDocument();
    });
});
