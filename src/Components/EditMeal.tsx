/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import { AdminListProps } from "../Interfaces/AdminListProps";
import { MealListProps } from "../Interfaces/MealObject";
import { Meal } from "../Interfaces/MealObject";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AdminEditHiddenProps } from "../Interfaces/AdminEditHiddenProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import "./EditItemPopup.css";
import { PointerProps } from "../Interfaces/PointerProps";
import {
    Grid,
    GridItem,
    Checkbox,
    ChakraProvider,
    CheckboxGroup
} from "@chakra-ui/react";

export function EditMeal({
    mealList,
    setMealList,
    adminList,
    setAdminList,
    userList,
    setUserList,
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
    setPointerEventsEnabled
}: MealListProps &
    AdminEditHiddenProps &
    AdminListProps &
    UserListProps &
    Meal &
    PointerProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
        //setPointerEventsEnabled(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPointerEventsEnabled(true);
    };
    //Setting name
    const [newName, setName] = useState<string>(name);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    //Setting serving size
    const [newServingSize, setServingSize] = useState<number>(serving_size);

    function updateServingSize(event: React.ChangeEvent<HTMLInputElement>) {
        setServingSize(parseInt(event.target.value));
    }

    //Setting calories
    const [newCalories, setCalories] = useState<number>(calories);

    function updateCalories(event: React.ChangeEvent<HTMLInputElement>) {
        setCalories(parseInt(event.target.value));
    }

    //Setting total fat
    const [newTotalFat, setTotalFat] = useState<number>(total_fat);

    function updateTotalFat(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalFat(parseInt(event.target.value));
    }

    //Setting cholesterol
    const [newCholesterol, setCholesterol] = useState<number>(cholesterol);

    function updateCholesterol(event: React.ChangeEvent<HTMLInputElement>) {
        setCholesterol(parseInt(event.target.value));
    }

    //Setting sodium
    const [newSodium, setSodium] = useState<number>(sodium);

    function updateSodium(event: React.ChangeEvent<HTMLInputElement>) {
        setSodium(parseInt(event.target.value));
    }

    //Setting total carbs
    const [newTotalCarbs, setTotalCarbs] = useState<number>(total_carbs);

    function updateTotalCarbs(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalCarbs(parseInt(event.target.value));
    }

    //Setting total sugars
    const [newTotalSugars, setTotalSugars] = useState<number>(total_sugars);

    function updateTotalSugars(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalSugars(parseInt(event.target.value));
    }

    //Setting protein
    const [newProtein, setProtein] = useState<number>(protein);

    function updateProtein(event: React.ChangeEvent<HTMLInputElement>) {
        setProtein(parseInt(event.target.value));
    }

    //Setting image
    const [newImage, setImage] = useState<string>(image);

    function updateImage(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }

    //Setting Ingrediantes
    const [newIngredients, setIngredients] = useState<string[]>(ingredients);

    function updateIngredients(event: React.ChangeEvent<HTMLInputElement>) {
        const ingredients = event.target.value.split(",");
        setIngredients(ingredients);
    }

    //Setting Tags
    const [selectedTags, setSelectedTags] = useState<string[]>(tags);

    function updateTags(tag: string) {
        let updatedTags: string[];
        if (selectedTags.includes(tag)) {
            updatedTags = selectedTags.filter(
                (selectedTag) => selectedTag !== tag
            );
        } else {
            updatedTags = [...selectedTags, tag];
        }

        setSelectedTags(updatedTags);
    }

    //Assigning values and creating a new meal object
    function updateMeal() {
        if (
            newName !== "" &&
            newServingSize !== -1 &&
            newCalories !== -1 &&
            newTotalFat !== -1 &&
            newCholesterol !== -1 &&
            newSodium !== -1 &&
            newTotalCarbs !== -1 &&
            newTotalSugars !== -1 &&
            newProtein !== -1 &&
            newImage !== ""
        ) {
            const newMeal: Meal = {
                name: newName,
                serving_size: newServingSize,
                calories: newCalories,
                total_fat: newTotalFat,
                cholesterol: newCholesterol,
                sodium: newSodium,
                total_carbs: newTotalCarbs,
                total_sugars: newTotalSugars,
                protein: newProtein,
                image: newImage,
                ingredients: newIngredients,
                tags: selectedTags
            };
            const mealIndex = mealList.findIndex(
                (meal: Meal): boolean => meal.name === name
            );
            const copy = [...mealList];
            copy[mealIndex] = newMeal;
            setMealList(copy);

            const adminMealIndex = adminList.findIndex(
                (meal: Meal): boolean => meal.name === name
            );
            const adminCopy = [...adminList];
            adminCopy[adminMealIndex] = newMeal;
            setAdminList(adminCopy);

            const userListCopy = userList.map((user: User) => ({
                ...user,
                list_of_items: user.list_of_items.map((meal: Meal) =>
                    meal.name === name ? newMeal : meal
                ),
                list_of_favorites: user.list_of_favorites.map((meal: Meal) =>
                    meal.name === name ? newMeal : meal
                )
            }));
            setUserList(userListCopy);
        } else {
            console.log("Enter valid inputs");
        }
    }

    return (
        <div>
            <div>
                <Button id="editOpenPopup" onClick={handleOpenPopup}>
                    Edit
                </Button>
                {showPopup && (
                    <div id="editPopupOverlay" className="show">
                        <div id="editPopupContent">
                            <ChakraProvider>
                                <Grid
                                    templateColumns="repeat(2, 1fr)"
                                    gap={4}
                                    className="edit-popup-content"
                                >
                                    <GridItem>
                                        <div>
                                            <Form.Group controlId="formEditName">
                                                <Form.Label>Name:</Form.Label>
                                                <Form.Control
                                                    value={newName}
                                                    onChange={updateName}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditServingSize">
                                                <Form.Label>
                                                    Serving Size:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newServingSize}
                                                    onChange={updateServingSize}
                                                    type="number"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditCalories">
                                                <Form.Label>
                                                    Calories:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newCalories}
                                                    onChange={updateCalories}
                                                    type="number"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditTotalFat">
                                                <Form.Label>
                                                    Total Fat:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newTotalFat}
                                                    onChange={updateTotalFat}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditCholesterol">
                                                <Form.Label>
                                                    Cholesterol:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newCholesterol}
                                                    onChange={updateCholesterol}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditSodium">
                                                <Form.Label>Sodium:</Form.Label>
                                                <Form.Control
                                                    value={newSodium}
                                                    onChange={updateSodium}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditTotalCarbs">
                                                <Form.Label>
                                                    Total Carbohydrates:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newTotalCarbs}
                                                    onChange={updateTotalCarbs}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </GridItem>
                                    <GridItem>
                                        <div>
                                            <Form.Group controlId="formEditTotalSugars">
                                                <Form.Label>
                                                    Total Sugars:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newTotalSugars}
                                                    onChange={updateTotalSugars}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditProtein">
                                                <Form.Label>
                                                    Protein:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newProtein}
                                                    onChange={updateProtein}
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formEditImage">
                                                <Form.Label>
                                                    Image Link:
                                                </Form.Label>
                                                <Form.Control
                                                    value={newImage}
                                                    onChange={updateImage}
                                                ></Form.Control>
                                            </Form.Group>
                                        </div>
                                        <Form.Group controlId="formEditIngredients">
                                            <Form.Label>
                                                Enter ingredients in a comma
                                                seperated list with no spaces:
                                            </Form.Label>
                                            <Form.Control
                                                value={newIngredients}
                                                onChange={updateIngredients}
                                            ></Form.Control>
                                        </Form.Group>
                                        <div>
                                            <CheckboxGroup>
                                                <Checkbox
                                                    colorScheme="green"
                                                    isChecked={selectedTags.includes(
                                                        "Meat-Free"
                                                    )}
                                                    onChange={() =>
                                                        updateTags("meat-free")
                                                    }
                                                >
                                                    Meat-Free
                                                </Checkbox>
                                                <Checkbox
                                                    colorScheme="green"
                                                    isChecked={selectedTags.includes(
                                                        "dairy-free"
                                                    )}
                                                    onChange={() =>
                                                        updateTags("dairy-free")
                                                    }
                                                >
                                                    Dairy-free
                                                </Checkbox>
                                                <Checkbox
                                                    colorScheme="green"
                                                    isChecked={selectedTags.includes(
                                                        "vegan"
                                                    )}
                                                    onChange={() =>
                                                        updateTags("vegan")
                                                    }
                                                >
                                                    Vegan-friendly
                                                </Checkbox>
                                                <Checkbox
                                                    colorScheme="green"
                                                    isChecked={selectedTags.includes(
                                                        "vegetarian"
                                                    )}
                                                    onChange={() =>
                                                        updateTags("vegetarian")
                                                    }
                                                >
                                                    Vegetarian
                                                </Checkbox>
                                                <Checkbox
                                                    colorScheme="green"
                                                    isChecked={selectedTags.includes(
                                                        "gluten-free"
                                                    )}
                                                    onChange={() =>
                                                        updateTags(
                                                            "gluten-free"
                                                        )
                                                    }
                                                >
                                                    Gluten-free
                                                </Checkbox>
                                            </CheckboxGroup>
                                        </div>

                                        <div>
                                            <Button
                                                onClick={() => updateMeal()}
                                            >
                                                Save Changes
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                id="editClosePopup"
                                                onClick={handleClosePopup}
                                            >
                                                Close
                                            </Button>
                                        </div>
                                    </GridItem>
                                </Grid>
                            </ChakraProvider>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
