/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
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
    Avatar,
    WrapItem,
    Wrap
} from "@chakra-ui/react";
import { User } from "../Interfaces/UserObject";

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
    userType,
    currentUser,
    userList,
    setUserList
}: Meal &
    MealListProps &
    UserTypeProps &
    CurrentUserProps &
    UserListProps): JSX.Element {
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

    function updateFavorites(event: React.ChangeEvent<HTMLInputElement>) {
        const index = userList.findIndex(
            (object) => object.name === currentUser.name
        );
        const copy = [...userList];
        const clistIndex = mealList.findIndex(
            (object) => object.name === event.target.value
        );
        if (event.target.checked === true) {
            copy[index].list_of_favorites.push(mealList[clistIndex]);
            setUserList(copy);
        } else if (event.target.checked === false) {
            const mealIndex = copy[index].list_of_favorites.findIndex(
                (object) => object.name === event.target.value
            );
            copy[index].list_of_favorites.splice(mealIndex, 1);
            setUserList(copy);
        }
    }

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
                borderColor="green.400"
                bg="white"
                size="md"
            >
                <CardHeader color="gray.700">
                    <Flex gap={3}>
                        <Avatar src={image} size="2xl" />
                        <Box>
                            <Heading as="h3" size="md">
                                {name}
                            </Heading>
                            <Text fontSize="xs" color="gray.500">
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
                    <Flex direction="column" align="center" justify="center">
                        <Wrap spacing={1}>
                            <WrapItem>
                                <Button
                                    variant={
                                        showNutrition ? "primary" : "ghost"
                                    }
                                    onClick={() => setShowNutrition(true)}
                                >
                                    Nutrition
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    variant={
                                        !showNutrition ? "primary" : "ghost"
                                    }
                                    onClick={() => setShowNutrition(false)}
                                >
                                    Ingredients
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    hidden={!(userType === "superUser")}
                                    onClick={() => RemoveMeal(name)}
                                >
                                    Remove
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Form.Check
                                    hidden={userType === "superUser"}
                                    type="checkbox"
                                    id="fav-check"
                                    label={
                                        userType === "superUser"
                                            ? undefined
                                            : "Favorite"
                                    }
                                    value={name}
                                    onChange={updateFavorites}
                                />
                                <Text
                                    fontSize="md"
                                    noOfLines={2}
                                    display="block"
                                    textAlign="left"
                                    marginTop="5%"
                                >
                                    Amount in User Lists:{" "}
                                    {userList.reduce(
                                        (count: number, user: User) =>
                                            user.list_of_items.reduce(
                                                (
                                                    perUserCount: number,
                                                    meal: Meal
                                                ) =>
                                                    perUserCount +
                                                    (meal.name === name
                                                        ? 1
                                                        : 0),
                                                0
                                            ) + count,
                                        0
                                    )}
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                </CardFooter>
            </Card>
        </ChakraProvider>
    );
}

export function CenterList({
    mealList,
    setMealList,
    userType,
    setUserType,
    currentUser,
    setCurrentUser,
    userList,
    setUserList
}: MealListProps & UserTypeProps & UserListProps & CurrentUserProps) {
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
                                userList={userList}
                                setUserList={setUserList}
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                            ></MealDraggable>
                        </div>
                    ))}
                </SimpleGrid>
            </ChakraProvider>
        </div>
    );
}
