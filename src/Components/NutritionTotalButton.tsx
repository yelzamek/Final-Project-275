import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { User } from "../Interfaces/UserObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";

export function NutritionalTotalButton({
    list_of_items,
    userType
}: User & UserTypeProps): JSX.Element {
    const [isHidden, setHidden] = useState<boolean>(true);
    let servingSum = 0;
    let calorieSum = 0;
    let fatSum = 0;
    let cholesterolSum = 0;
    let sodiumSum = 0;
    let carbSum = 0;
    let sugarSum = 0;
    let proteinSum = 0;
    list_of_items.map((value) => {
        servingSum += value.serving_size;
        calorieSum += value.calories;
        fatSum += value.total_fat;
        cholesterolSum += value.cholesterol;
        carbSum += value.total_carbs;
        sugarSum += value.total_sugars;
        sodiumSum += value.sodium;
        proteinSum += value.protein;
    });

    return (
        <div hidden={userType === "superUser" || userType === "Admin"}>
            <Button onClick={() => setHidden(!isHidden)}>Show Totals:</Button>
            <div
                hidden={
                    isHidden || userType === "superUser" || userType === "Admin"
                }
            >
                <div>
                    Servings: {servingSum}, Calories: {calorieSum}, Total Fat:{" "}
                    {fatSum}, Cholesterol: {cholesterolSum}, Sodium: {sodiumSum}
                    , Total Carbohydrates: {carbSum}, Total Sugars: {sugarSum},
                    Protein: {proteinSum}
                </div>
            </div>
        </div>
    );
}
