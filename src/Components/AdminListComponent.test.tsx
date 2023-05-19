/*import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { AdminList } from "../Components/AdminListComponent";

const mockMealList = [
    name: 'Meal 1',
    image: 'meal1.jpg',
    serving_size: '1 cup',
    calories: 250,
    total_fat: 10,
    cholesterol: 20,
    sodium: 300,
    total_carbs: 40,
    total_sugars: 10,
    protein: 20,
    tags: ['vegetarian', 'gluten-free'],
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
  },
  {
    name: 'Meal 2',
    image: 'meal2.jpg',
    serving_size: '1 piece',
    calories: 180,
    total_fat: 8,
    cholesterol: 15,
    sodium: 250,
    total_carbs: 30,
    total_sugars: 5,
    protein: 15,
    tags: ['vegan', 'low-carb'],
    ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
  },
];

const mockSetMealList = jest.fn();
const mockSetAdminList = jest.fn();
const mockSetUserList = jest.fn();
const mockSetPointerEventsEnabled = jest.fn();

const mockProps = {
    mealList: mockMealList,
    setMealList: mockSetMealList,
    userType: "Admin",
    adminList: [],
    setAdminList: mockSetAdminList,
    userList: [],
    setUserList: mockSetUserList,
    setPointerEventsEnabled: mockSetPointerEventsEnabled,
    pointerEventsEnabled: true
};

test("renders the admin list component", () => {
    const { getByText } = render(<AdminListComponent {...mockProps} />);
    const adminListHeading = getByText("Admin List:");
    expect(adminListHeading).toBeInTheDocument();
});

test("adds a meal to the admin list when dropped", () => {
    const { getByText } = render(<AdminListComponent {...mockProps} />);
    const mockMeal = { name: "Meal 1" };
    const dropArea = getByTestId("drop-area"); // Add a data-testid attribute to the drop area
    fireEvent.drop(dropArea, {
        dataTransfer: { getData: () => JSON.stringify(mockMeal) }
    });
    expect(mockSetAdminList).toHaveBeenCalledWith([mockMeal]);
});

test("removes a meal from the admin list when Remove button is clicked", () => {
    const mockAdminList = [{ name: "Meal 1" }, { name: "Meal 2" }];
    const { getByText } = render(
        <AdminList {...mockProps} adminList={mockAdminList} />
    );
    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);
    expect(mockSetAdminList).toHaveBeenCalledTimes(1);
    expect(mockSetAdminList).toHaveBeenCalledWith([{ name: "Meal 2" }]);
});

test("renders the EditMeal component when Edit button is clicked", () => {
    const mockAdminList = [{ name: "Meal 1" }];
    const { getByText } = render(
        <AdminList {...mockProps} adminList={mockAdminList} />
    );
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    const editMealComponent = getByTestId("edit-meal-component"); // Add a data-testid attribute to the EditMeal component
    expect(editMealComponent).toBeInTheDocument();
});

test("displays the admin list when userType is admin or superuser", () => {
    const { container: adminListContainer } = render(
        <AdminList {...mockProps} userType="Admin" />
    );
    expect(adminListContainer).toBeVisible();

    const { container: superUserListContainer } = render(
        <AdminList {...mockProps} userType="superUser" />
    );
    expect(superUserListContainer).toBeVisible();

    const { container: regularUserListContainer } = render(
        <AdminList {...mockProps} userType="regularUser" />
    );
    expect(regularUserListContainer).not.toBeVisible();
});*/
export {};
