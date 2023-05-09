/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button } from "react-bootstrap";
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
    ingredients,
    tags,
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
                        <Avatar src={image} size="xl" />
                        <Box>
                            <Heading as="h3" size="lg">
                                {name}
                            </Heading>
                            <Text fontSize="sm" color="gray.500">
                                {tags.join(",  ")}
                            </Text>
                        </Box>
                    </Flex>
                </CardHeader>

                <CardBody
                    color="gray.500"
                    style={{ columnCount: 2 }}
                    marginTop="0"
                >
                    {showNutrition && (
                        <Text whiteSpace="pre-line" fontSize="sm">
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
                        <Text whiteSpace="pre-line" fontSize="sm">
                            {ingredients.join("\n")}
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
    return (
        <div style={{ padding: "20px" }}>
            <div>Center List</div>
            <ChakraProvider>
                <SimpleGrid columns={4} spacing={5}>
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
                                tags={[...MealObject.tags]}
                                ingredients={[...MealObject.ingredients]}
                            ></MealDraggable>
                        </div>
                    ))}
                </SimpleGrid>
            </ChakraProvider>
        </div>
    );
}
