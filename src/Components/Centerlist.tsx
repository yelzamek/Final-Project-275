/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { Form } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { FilterChoicesProps } from "../Interfaces/FilterChoices";
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
    Divider,
    ChakraProvider,
    Avatar,
    WrapItem,
    Wrap,
    Button
} from "@chakra-ui/react";
import { User } from "../Interfaces/UserObject";
import { PopUp } from "./UsersWithItemPopup";
import { PointerProps } from "../Interfaces/PointerProps";

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
    setUserList,
    setUserType,
    pointerEventsEnabled,
    setPointerEventsEnabled,
    setUserType,
    setCurrentUser
}: Meal &
    MealListProps &
    UserTypeProps &
    CurrentUserProps &
    UserListProps &
    PointerProps): JSX.Element {
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
    const [isFavorite, setIsFavorite] = useState<boolean>(
        currentUser.list_of_favorites.some((meal: Meal) => meal.name === name)
    );
    function toggleFavorite() {
        setIsFavorite(!isFavorite);
        const updatedUser = { ...currentUser };
        const favoriteIndex = updatedUser.list_of_favorites.findIndex(
            (meal) => meal.name === name
        );

        if (!isFavorite) {
            if (favoriteIndex === -1) {
                updatedUser.list_of_favorites.push(
                    mealList[
                        mealList.findIndex((meal: Meal) => meal.name === name)
                    ]
                );
            }
        } else {
            if (favoriteIndex !== -1) {
                updatedUser.list_of_favorites.splice(favoriteIndex, 1);
            }
        }

        setCurrentUser(updatedUser);
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        setUserList([
            ...userList.slice(0, userIndex),
            updatedUser,
            ...userList.slice(userIndex + 1)
        ]);
    }
    const [showNutrition, setShowNutrition] = useState<boolean>(true);
    useEffect(() => {
        setIsFavorite(
            currentUser.list_of_favorites.some(
                (meal: Meal) => meal.name === name
            )
        );
    }, [currentUser, name]);
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
                maxH="500px"
            >
                <CardHeader color="gray.700">
                    <Flex gap={3}>
                        <Avatar src={image} size="2xl" />
                        <Avatar src={image} size="2xl" />
                        <Box>
                            <Heading as="h3" size="md">
                            <Heading as="h3" size="md">
                                {name}
                            </Heading>
                            <Text fontSize="xs" color="gray.500">
                            <Text fontSize="xs" color="gray.500">
                                {tags.join(",  ")}
                            </Text>
                        </Box>
                    </Flex>
                </CardHeader>

                <CardBody color="gray.500" marginTop="0">
                    {showNutrition && (
                        <Box maxH="100px" overflowY="scroll">
                            <Text
                                whiteSpace="pre-line"
                                fontSize="sm"
                                style={{ columnCount: 2 }}
                                maxH="100px"
                            >
                                Serving Size: {serving_size}
                                {"\n"} Calories: {calories}
                                {"\n"} Total Fat: {total_fat}
                                {"\n"} Cholesterol: {cholesterol} mg
                                {"\n"} Sodium: {sodium} mg
                                {"\n"} Total Carbs: {total_carbs} g{"\n"} Total
                                Sugars: {total_sugars} g{"\n"} Protein:{" "}
                                {protein} g
                            </Text>
                        </Box>
                    )}
                    {!showNutrition && (
                        <Box maxH="100px" overflowY="scroll">
                            <Text
                                whiteSpace="pre-line"
                                fontSize="sm"
                                style={{ columnCount: 2 }}
                            >
                                {ingredients.join("\n")}
                            </Text>
                        </Box>
                    )}
                    {/* {showNutrition && (
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
                    )} */}
                </CardBody>

                <Divider borderColor="gray.200" />

                <CardFooter>
                    <Flex direction="column" align="center" justify="center">
                        <Wrap spacing={1}>
                            <WrapItem>
                                <Button
                                    colorScheme="green"
                                    variant={
                                        showNutrition ? "outline" : "ghost"
                                    }
                                    onClick={() => setShowNutrition(true)}
                                    size="sm"
                                >
                                    Nutrition
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    colorScheme="green"
                                    variant={
                                        !showNutrition ? "outline" : "ghost"
                                    }
                                    onClick={() => setShowNutrition(false)}
                                    size="sm"
                                >
                                    Ingredients
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    colorScheme="green"
                                    size="sm"
                                    hidden={!(userType === "superUser")}
                                    onClick={() => RemoveMeal(name)}
                                    top="13%"
                                >
                                    X
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
                                    display={
                                        userType === "superUser"
                                            ? "block"
                                            : "none"
                                    }
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
                                <PopUp
                                    userList={userList}
                                    setUserList={setUserList}
                                    name={name}
                                    userType={userType}
                                    setUserType={setUserType}
                                    setPointerEventsEnabled={
                                        setPointerEventsEnabled
                                    }
                                    pointerEventsEnabled={pointerEventsEnabled}
                                ></PopUp>
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
    setUserList,
    filterChoices,
    pointerEventsEnabled,
    setPointerEventsEnabled
}: MealListProps &
   
    UserTypeProps &
   
    UserListProps &
   
    CurrentUserProps &
    FilterChoicesProps &
    PointerProps) {
    function displayable(MealObject: Meal) {
        if (filterChoices.includes("Favorites")) {
            const favIndex = filterChoices.indexOf("Favorites");
            const filterWithoutFavorites = [...filterChoices];
            filterWithoutFavorites.splice(favIndex, 1);
            if (currentUser.list_of_favorites.includes(MealObject)) {
                return !filterWithoutFavorites.every((choice) =>
                    MealObject.tags.includes(choice)
                );
            } else {
                return true;
            }
        } else {
            return !filterChoices.every((choice) =>
                MealObject.tags.includes(choice)
            );
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <div>Center List</div>
            <ChakraProvider>
                <SimpleGrid columns={4} spacing={5}>
                    {mealList.map((MealObject: Meal) => (
                        <div
                            key={MealObject.name}
                            hidden={displayable(MealObject)}
                        >
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
                                setPointerEventsEnabled={
                                    setPointerEventsEnabled
                                }
                                pointerEventsEnabled={pointerEventsEnabled}
                            ></MealDraggable>
                        </div>
                    ))}
                </SimpleGrid>
            </ChakraProvider>
        </div>
    );
}
