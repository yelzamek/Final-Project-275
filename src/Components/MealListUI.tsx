import React from "react";
import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import { Meal } from "../Interfaces/MealObject";
import { MealItem } from "./MealItem";

export default function MealListUI({
    mealData
}: {
    mealData: Meal[];
}): JSX.Element {
    const foodList = mealData.map((Meal) => {
        return {
            ...Meal
        };
    });
    //Maps each food in our list to a box with food details
    const [isLargerThan2000] = useMediaQuery("(min-width: 2000px)");
    return (
        <Box
            h={window.innerHeight * 0.7}
            overflowY="scroll"
            mt={50}
            className="section"
        >
            <Grid
                templateColumns={
                    isLargerThan2000 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
                }
                rowGap={3}
                columnGap={3}
            >
                {foodList.map((food) => {
                    return (
                        <MealItem
                            key={food.name}
                            name={food.name}
                            image={food.image}
                            calories={food.calories}
                            fats={food.total_fat}
                            sugars={food.total_sugars}
                            protein={food.protein}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
}
