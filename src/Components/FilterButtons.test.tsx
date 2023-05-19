import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { FilterChoices } from "./FilterButtons";

describe("FilterChoices", () => {
    test("updates filterChoices when checkboxes are checked or unchecked", () => {
        const filterChoices: string[] = [];
        const setFilterChoices = jest.fn();
        const userType = "RegularUser";
        const setUserType = jest.fn();

        const { getByLabelText } = render(
            <FilterChoices
                filterChoices={filterChoices}
                setFilterChoices={setFilterChoices}
                userType={userType}
                setUserType={setUserType}
            />
        );

        const meatFreeCheckbox = getByLabelText("Meat-Free");
        const dairyFreeCheckbox = getByLabelText("Dairy-Free");

        fireEvent.click(meatFreeCheckbox);
        expect(setFilterChoices).toHaveBeenCalledTimes(1);
        expect(setFilterChoices).toHaveBeenCalledWith(
            expect.arrayContaining(["meat-free"])
        );

        fireEvent.click(dairyFreeCheckbox);
        expect(setFilterChoices).toHaveBeenCalledTimes(2);
        expect(setFilterChoices).toHaveBeenCalledWith(
            expect.arrayContaining(["meat-free"])
        );
        expect(setFilterChoices).toHaveBeenCalledWith(
            expect.arrayContaining(["dairy-free"])
        );
    });

    test("filterChoices renders checkboxes correctly", () => {
        const filterChoices: string[] = [];
        const setFilterChoices = jest.fn();
        const userType = "RegularUser";
        const setUserType = jest.fn();

        const { getByLabelText } = render(
            <FilterChoices
                filterChoices={filterChoices}
                setFilterChoices={setFilterChoices}
                userType={userType}
                setUserType={setUserType}
            />
        );

        const meatFreeCheckbox = getByLabelText("Meat-Free");
        const dairyFreeCheckbox = getByLabelText("Dairy-Free");
        const glutenFreeCheckbox = getByLabelText("Gluten-Free");
        const vegetarianCheckbox = getByLabelText("Vegetarian");
        const veganCheckbox = getByLabelText("Vegan");

        expect(meatFreeCheckbox).toBeInTheDocument();
        expect(dairyFreeCheckbox).toBeInTheDocument();
        expect(glutenFreeCheckbox).toBeInTheDocument();
        expect(vegetarianCheckbox).toBeInTheDocument();
        expect(veganCheckbox).toBeInTheDocument();
    });

    test("filterChoices displays favorites checkbox for superuser and admin users", () => {
        const filterChoices: string[] = [];
        const setFilterChoices = jest.fn();
        const userType = "superUser";
        const setUserType = jest.fn();

        const { getByLabelText } = render(
            <FilterChoices
                filterChoices={filterChoices}
                setFilterChoices={setFilterChoices}
                userType={userType}
                setUserType={setUserType}
            />
        );

        const favoritesCheckbox = getByLabelText("Favorites");
        expect(favoritesCheckbox).toBeInTheDocument();
    });

    test("filterChoices hides favorites checkbox for regular users", () => {
        const filterChoices: string[] = [];
        const setFilterChoices = jest.fn();
        const userType = "RegularUser";
        const setUserType = jest.fn();

        const { getByLabelText } = render(
            <FilterChoices
                filterChoices={filterChoices}
                setFilterChoices={setFilterChoices}
                userType={userType}
                setUserType={setUserType}
            />
        );

        const favoritesCheckbox = getByLabelText(
            "Favorites"
        ) as HTMLInputElement;
        expect(favoritesCheckbox.hidden).toBe(false);
    });

    test("filterChoices invokes setUserType when checkboxes are checked or unchecked", () => {
        const filterChoices: string[] = [];
        const setFilterChoices = jest.fn();
        const userType = "RegularUser";
        const setUserType = jest.fn();

        const { getByLabelText } = render(
            <FilterChoices
                filterChoices={filterChoices}
                setFilterChoices={setFilterChoices}
                userType={userType}
                setUserType={setUserType}
            />
        );

        const meatFreeCheckbox = getByLabelText("Meat-Free");
        const dairyFreeCheckbox = getByLabelText("Dairy-Free");

        fireEvent.click(meatFreeCheckbox);
        fireEvent.click(dairyFreeCheckbox);

        expect(setUserType).not.toHaveBeenCalled();
    });
});
