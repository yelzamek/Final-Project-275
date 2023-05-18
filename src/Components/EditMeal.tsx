import { AdminListProps } from "../Interfaces/AdminListProps";
import { MealListProps } from "../Interfaces/MealObject";
import { Meal } from "../Interfaces/MealObject";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AdminEditHiddenProps } from "../Interfaces/AdminEditHiddenProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";

export function EditMeal({
    mealList,
    setMealList,
    adminList,
    setAdminList,
    setHidden,
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
    protein
}: MealListProps &
    AdminEditHiddenProps &
    AdminListProps &
    UserListProps &
    Meal): JSX.Element {
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

    function updateTags(event: React.ChangeEvent<HTMLInputElement>) {
        const tag = event.target.value;
        const isSelected = selectedTags.includes(tag);
        const [updatedTags, setUpdatedTags] = useState<string[]>([]);
        if (isSelected) {
            setUpdatedTags(
                selectedTags.filter((selectedTag) => selectedTag !== tag)
            );
        } else {
            setUpdatedTags([...selectedTags, tag]);
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

            setHidden(true);
        } else {
            console.log("Enter valid inputs");
        }
    }

    return (
        <div>
            <div>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={newName} onChange={updateName} />
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formServingSize">
                    <Form.Label>Serving Size:</Form.Label>
                    <Form.Control
                        value={newServingSize}
                        onChange={updateServingSize}
                        type="number"
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formCalories">
                    <Form.Label>Calories:</Form.Label>
                    <Form.Control
                        value={newCalories}
                        onChange={updateCalories}
                        type="number"
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formTotalFat">
                    <Form.Label>Total Fat:</Form.Label>
                    <Form.Control
                        value={newTotalFat}
                        onChange={updateTotalFat}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formCholesterol">
                    <Form.Label>Cholesterol:</Form.Label>
                    <Form.Control
                        value={newCholesterol}
                        onChange={updateCholesterol}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formSodium">
                    <Form.Label>Total Fat:</Form.Label>
                    <Form.Control
                        value={newSodium}
                        onChange={updateSodium}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formTotalCarbs">
                    <Form.Label>Total Carbohydrates:</Form.Label>
                    <Form.Control
                        value={newTotalCarbs}
                        onChange={updateTotalCarbs}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formTotalSugars">
                    <Form.Label>Total Sugars:</Form.Label>
                    <Form.Control
                        value={newTotalSugars}
                        onChange={updateTotalSugars}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formProtein">
                    <Form.Label>Protein:</Form.Label>
                    <Form.Control
                        value={newProtein}
                        onChange={updateProtein}
                        type="number"
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formImage">
                    <Form.Label>Image Link:</Form.Label>
                    <Form.Control
                        value={newImage}
                        onChange={updateImage}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formIngredients">
                    <Form.Label>
                        Enter Ingredientes in a comma seperated List with no
                        spaces
                    </Form.Label>
                    <Form.Control
                        value={newIngredients}
                        onChange={updateIngredients}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formTags">
                    <Form.Label>Tags:</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Meat-Free"
                        value="meat-free"
                        checked={selectedTags.includes("meat-free")}
                        onChange={updateTags}
                    />
                    <Form.Check
                        type="radio"
                        label="Dairy-Free"
                        value="dairy-free"
                        checked={selectedTags.includes("dairy-free")}
                        onChange={updateTags}
                    />
                    <Form.Check
                        type="radio"
                        label="Vegan-Friendly"
                        value="vegan-friendly"
                        checked={selectedTags.includes("vegan-friendly")}
                        onChange={updateTags}
                    />
                    <Form.Check
                        type="radio"
                        label="Vegetarian"
                        value="vegetarian"
                        checked={selectedTags.includes("vegetarian")}
                        onChange={updateTags}
                    />
                    <Form.Check
                        type="radio"
                        label="Gluten-Free"
                        value="gluten-free"
                        checked={selectedTags.includes("gluten-free")}
                        onChange={updateTags}
                    />
                </Form.Group>
            </div>

            <div style={{ height: "400px" }}>
                <Button onClick={() => updateMeal()}>Save Changes</Button>
            </div>
        </div>
    );
}
