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
    Grid
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

    function RootLayout() {
        return (
            <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
                <GridItem
                    as="aside"
                    colSpan={{ base: 6, lg: 2, xl: 1 }}
                    bg="purple.400"
                    minHeight={{ lg: "100vh" }}
                    p={{ base: "20px", lg: "30px" }}
                ></GridItem>
            </Grid>
        );
    }

    const [DetailsHidden, setDetailsHidden] = useState<boolean>(true);
    return (
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
                <Flex gap={5}>
                    <Box
                        as="aside"
                        bg="purple.400"
                        minHeight={{ lg: "100vh" }}
                        p={{ base: "20px", lg: "30px" }}
                        w="50px"
                        h="50px"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="50px"
                            src={image}
                            alt={name}
                        />
                    </Box>
                    <Box>
                        <Heading as="h3" size="sm">
                            {name}
                        </Heading>
                        <Text>placeholder</Text>
                    </Box>
                </Flex>
            </CardHeader>

            <CardBody color="gray.500">
                <Text>destextholder</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
                <HStack>
                    <Button variant="ghost">Ingredients</Button>
                    <Button variant="ghost">Nutrition</Button>
                </HStack>
            </CardFooter>
        </Card>
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
        <div>
            <div>Center List</div>
            <div>
                <SimpleGrid
                    p="10px"
                    columns={4}
                    spacing={10}
                    minChildWidth={250}
                >
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
                            ></MealDraggable>
                        </div>
                    ))}
                </SimpleGrid>
            </div>
        </div>
    );
}
