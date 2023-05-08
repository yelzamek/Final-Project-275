/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";
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
    Image,
    GridItem,
    Grid,
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
    protein
}: Meal): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
        item: { name: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

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
                    </HStack>
                </CardFooter>
            </Card>
        </ChakraProvider>
        // <Box
        //     ref={drag}
        //     style={{
        //         opacity: isDragging ? 0.5 : 1,
        //         fontSize: 25,
        //         fontWeight: "bold",
        //         cursor: "move"
        //     }}
        //     bg="white"
        //     height="200px"
        //     border="1px solid"
        // >
        //     <div>{name}</div>
        //     <img src={image} width="100" height="100"></img>
        //     <Button onClick={() => setDetailsHidden(!DetailsHidden)}>
        //         More
        //     </Button>
        //     <div
        //         hidden={DetailsHidden}
        //         style={{
        //             fontSize: 10
        //         }}
        //     >
        //         <div>Serving Size: {serving_size}</div>
        //         <div>Calories: {calories}</div>
        //         <div>Total Fat:{total_fat} g</div>
        //         <div>Cholesterol: {cholesterol} mg</div>
        //         <div>Sodium: {sodium} mg</div>
        //         <div>Total Carbs: {total_carbs} g</div>
        //         <div>Total Sugars: {total_sugars} g</div>
        //         <div>Protein: {protein} g</div>
        //     </div>
        //     {name}
        // </Box>
    );
}

export function CenterList({ mealList }: MealListProps) {
    return (
        <div style={{ padding: "20px" }}>
            <div>Center List</div>
            <ChakraProvider>
                <SimpleGrid columns={4} spacing={10}>
                    {mealList.map((MealObject: Meal) => (
                        <GridItem
                            key={MealObject.name}
                            colSpan={{ base: 6, lg: 2, xl: 1 }}
                        >
                            <div>
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
                                ></MealDraggable>
                            </div>
                        </GridItem>
                    ))}
                </SimpleGrid>
            </ChakraProvider>
        </div>
    );
}
