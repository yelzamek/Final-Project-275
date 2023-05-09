import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { useDrop } from "react-dnd";
import { Button } from "react-bootstrap";
import { AdminListProps } from "../Interfaces/AdminListProps";
import { Meal, MealListProps, nameProps } from "../Interfaces/MealObject";
import { EditMeal } from "./EditMeal";
import React, { useState } from "react";
import { AdminEditHiddenProps } from "../Interfaces/AdminEditHiddenProps";

export function AdminList({
    mealList,
    setMealList,
    userType,
    adminList,
    setAdminList
}: MealListProps & UserTypeProps & AdminListProps): JSX.Element {
    const [editHidden, setEditHidden] = useState<boolean>(true);

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
                    <div>
                        <Button onClick={() => RemoveItem(item, index)}>
                            Remove
                        </Button>
                        <Button onClick={() => setEditHidden(!editHidden)}>
                            Edit Item
                        </Button>
                        <div hidden={editHidden}>
                            <EditMeal
                                mealList={mealList}
                                setMealList={setMealList}
                                adminList={adminList}
                                setAdminList={setAdminList}
                                hidden={editHidden}
                                setHidden={setEditHidden}
                                name={item.name}
                                image={item.image}
                                serving_size={item.serving_size}
                                calories={item.calories}
                                total_fat={item.total_fat}
                                cholesterol={item.cholesterol}
                                sodium={item.sodium}
                                total_carbs={item.total_carbs}
                                total_sugars={item.total_sugars}
                                protein={item.protein}
                                tags={[...item.tags]}
                                ingredients={[...item.ingredients]}
                            ></EditMeal>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
