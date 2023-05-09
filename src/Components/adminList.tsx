import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { useDrop } from "react-dnd";
import { Button } from "react-bootstrap";
import { AdminListProps } from "../Interfaces/AdminListProps";
import { Meal, MealListProps, nameProps } from "../Interfaces/MealObject";
import React from "react";

export function AdminList({
    mealList,
    userType,
    adminList,
    setAdminList
}: MealListProps & UserTypeProps & AdminListProps): JSX.Element {
    function addToAdminList(name: nameProps) {
        const mealIndex = mealList.findIndex(
            (meal: Meal): boolean => meal.name === name.name
        );
        if (!adminList.includes(mealList[mealIndex])) {
            setAdminList([...adminList, mealList[mealIndex]]);
        }
    }
    const [{ isOver }, drop] = useDrop({
        accept: "Meal",
        drop: (name: nameProps) => addToAdminList(name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    function RemoveItem(item: Meal, index: number) {
        const updatedList = [...adminList];
        updatedList.splice(index, 1);
        setAdminList(updatedList);
    }
    return (
        <div
            ref={drop}
            style={{
                display:
                    userType === ("Admin" || "superUser")
                        ? "inline-block"
                        : "none",
                backgroundColor: isOver ? "green" : "white"
            }}
        >
            <div>Admin List:</div>
            {adminList.map((item: Meal, index: number) => (
                <div key={index}>
                    {item.name}{" "}
                    <Button onClick={() => RemoveItem(item, index)}>X</Button>
                </div>
            ))}
        </div>
    );
}
