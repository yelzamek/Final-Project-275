/* eslint-disable no-extra-parens */
import React from "react";
import { useDrop } from "react-dnd";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { Meal, MealListProps, nameProps } from "../Interfaces/MealObject";
import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { User } from "../Interfaces/UserObject";
import { ItemPopUp } from "./UserListPopup";

export function UserList({
    currentUser,
    setCurrentUser,
    mealList,
    setMealList,
    userType,
    userList,
    setUserList
}: UserListProps &
    CurrentUserProps &
    MealListProps &
    UserTypeProps): JSX.Element {
    function addToUserList(name: nameProps) {
        const mealIndex = mealList.findIndex(
            (meal: Meal): boolean => meal.name === name.name
        );
        const newMeal: Meal = {
            name: mealList[mealIndex].name,
            serving_size: mealList[mealIndex].serving_size,
            calories: mealList[mealIndex].calories,
            total_fat: mealList[mealIndex].total_fat,
            cholesterol: mealList[mealIndex].cholesterol,
            sodium: mealList[mealIndex].sodium,
            total_carbs: mealList[mealIndex].total_carbs,
            total_sugars: mealList[mealIndex].total_sugars,
            protein: mealList[mealIndex].protein,
            image: mealList[mealIndex].image,
            ingredients: [...mealList[mealIndex].ingredients],
            tags: [...mealList[mealIndex].tags]
        };
        setCurrentUser({
            name: currentUser.name,
            list_of_items: [...currentUser.list_of_items, newMeal],
            list_of_favorites: [...currentUser.list_of_favorites]
        });
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        setUserList([
            ...userList.slice(0, userIndex),
            {
                ...currentUser,
                list_of_items: [...currentUser.list_of_items, newMeal]
            },
            ...userList.slice(userIndex + 1)
        ]);
    }
    function RemoveItem(item: Meal, index: number) {
        const updatedList = [...currentUser.list_of_items];
        const updatedFavList = [...currentUser.list_of_favorites];
        if (currentUser.list_of_favorites.includes(item)) {
            const favIndex = currentUser.list_of_favorites.findIndex(
                (object) => object === item
            );
            updatedFavList.splice(favIndex, 1);
        }
        updatedList.splice(index, 1);
        setCurrentUser({
            name: currentUser.name,
            list_of_items: updatedList,
            list_of_favorites: updatedFavList
        });
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        setUserList([
            ...userList.slice(0, userIndex),
            {
                ...currentUser,
                list_of_items: updatedList,
                list_of_favorites: updatedFavList
            },
            ...userList.slice(userIndex + 1)
        ]);
    }
    const [{ isOver }, drop] = useDrop({
        accept: "Meal",
        drop: (name: nameProps) => addToUserList(name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <ChakraProvider>
            <div
                ref={drop}
                style={{
                    display: userType === "User" ? "inline-block" : "none",
                    backgroundColor: isOver ? "lightgray" : "white",
                    width: "300px",
                    height: "75%",
                    border: "2px solid black"
                }}
            >
                {currentUser.list_of_items.map((item: Meal, index: number) => (
                    <div key={index} style={{ paddingLeft: "10%" }}>
                        <Flex alignItems="center">
                            {item.name}
                            <Button
                                colorScheme="green"
                                size="sm"
                                onClick={() => RemoveItem(item, index)}
                            >
                                X
                            </Button>
                            <ItemPopUp
                                name={item.name}
                                mealList={mealList}
                                setMealList={setMealList}
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                                userList={userList}
                                setUserList={setUserList}
                            />
                        </Flex>
                    </div>
                ))}
            </div>
        </ChakraProvider>
    );
}
