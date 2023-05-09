/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import {
    Box,
    SimpleGrid,
    Text,
    Flex,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Divider,
    ChakraProvider,
    Avatar
} from "@chakra-ui/react";

export function MealDraggable({
    name,
    image,
    serving_size,
    calories,
    total_fat,
    cholesterol,
    sodium,
    total_carbs,
    total_sugars,
    protein,
    mealList,
    setMealList,
    userType
}: Meal & MealListProps & UserTypeProps): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
        item: { name: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    function RemoveMeal(removedMeal: string) {
        const copy = [...mealList];
        const index = copy.findIndex(
            (meal: Meal): boolean => meal.name === removedMeal
        );
        copy.splice(index, 1);
        setMealList(copy);
    }
    const [showNutrition, setShowNutrition] = useState<boolean>(true);
    return (
        <ChakraProvider>
            <Card
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 25,
                    fontWeight: "bold",
                    cursor: "move"
                }}
                borderTop="8px"
                borderColor="purple.400"
                bg="white"
            >
                <CardHeader color="gray.700">
                    <Flex gap={3}>
                        <Avatar src={image} size="lg" />
                        <Box>
                            <Heading as="h3" size="xl">
                                {name}
                            </Heading>
                        </Box>
                    </Flex>
                </CardHeader>

                <CardBody
                    color="gray.500"
                    style={{ columnCount: 2 }}
                    marginTop="0"
                >
                    {showNutrition && (
                        <Text whiteSpace="pre-line" fontSize="md">
                            Serving Size: {serving_size}
                            {"\n"} Calories: {calories}
                            {"\n"}
                            Total Fat: {total_fat}
                            {"\n"} Cholesterol: {cholesterol} mg{"\n"} Sodium:{" "}
                            {sodium} mg{"\n"} Total Carbs: {total_carbs} g{"\n"}{" "}
                            Total Sugars: {total_sugars} g{"\n"} Protein:{" "}
                            {protein} g{"\n"}
                        </Text>
                    )}
                    {!showNutrition && (
                        <Text whiteSpace="pre-line" fontSize="md">
                            Placeholder Ingrediantes text
                        </Text>
                    )}
                </CardBody>

                <Divider borderColor="gray.200" />

                <CardFooter>
                    <HStack>
                        <Button
                            variant={showNutrition ? "primary" : "ghost"}
                            onClick={() => setShowNutrition(true)}
                        >
                            Nutrition
                        </Button>
                        <Button
                            variant={!showNutrition ? "primary" : "ghost"}
                            onClick={() => setShowNutrition(false)}
                        >
                            Ingredients
                        </Button>
                        <Button
                            hidden={!(userType === "superUser")}
                            onClick={() => RemoveMeal(name)}
                        >
                            Remove
                        </Button>
                    </HStack>
                </CardFooter>
            </Card>
        </ChakraProvider>
    );
}

export function CenterList({
    mealList,
    setMealList,
    userType,
    setUserType
}: MealListProps & UserTypeProps) {
    const [sortOption, setSortOption] = useState<string>("None");
    function updateSortOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortOption(event.target.value);
        if (sortOption === "Alphabetical") {
            const copy = [...mealList];
            setMealList(
                copy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            );
        }
        if (sortOption === "Reverse Alphabetical") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (sortOption === "Calories: Lowest to Highest") {
            const copy = [...mealList];
            setMealList(
                copy
                    .sort(function (a, b) {
                        if (a.calories < b.calories) {
                            return -1;
                        }
                        if (a.calories > b.calories) {
                            return 1;
                        }
                        return 0;
                    })
                    .reverse()
            );
        }
        if (sortOption === "Calories: Highest to Lowest") {
            const copy = [...mealList];
            setMealList(
                copy.sort(function (a, b) {
                    if (a.calories < b.calories) {
                        return -1;
                    }
                    if (a.calories > b.calories) {
                        return 1;
                    }
                    return 0;
                })
            );
        }
    }
    const SORT_LIST: string[] = [
        "None",
        "Alphabetical",
        "Reverse Alphabetical",
        "Calories: Lowest to Highest",
        "Calories: Highest to Lowest"
    ];
    return (
        <div style={{ padding: "20px" }}>
            <div>Center List</div>
            <div>
                <Form.Group controlId="sortOption">
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Select value={sortOption} onChange={updateSortOption}>
                        {SORT_LIST.map((chosenOption: string) => (
                            <option key={chosenOption} value={chosenOption}>
                                {chosenOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <ChakraProvider>
                <SimpleGrid columns={4} spacing={10}>
                    {mealList.map((MealObject: Meal) => (
                        <div key={MealObject.name}>
                            <MealDraggable
                                name={MealObject.name}
                                image={MealObject.image}
                                serving_size={MealObject.serving_size}
                                calories={MealObject.calories}
                                total_fat={MealObject.total_fat}
                                cholesterol={MealObject.cholesterol}
                                sodium={MealObject.sodium}
                                total_carbs={MealObject.total_carbs}
                                total_sugars={MealObject.total_sugars}
                                protein={MealObject.protein}
                                userType={userType}
                                setUserType={setUserType}
                                mealList={mealList}
                                setMealList={setMealList}
                            ></MealDraggable>
                        </div>
                    ))}
                </SimpleGrid>
            </ChakraProvider>
        </div>
    );
}
