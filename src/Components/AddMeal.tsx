import { MealListProps } from "../Interfaces/MealObject";
import { Meal } from "../Interfaces/MealObject";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";

export function AddMeal({
    mealList,
    setMealList,
    userType
}: MealListProps & UserTypeProps): JSX.Element {
    //Setting name
    const [newName, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    //Setting serving size
    const [newServingSize, setServingSize] = useState<number>(-1);

    function updateServingSize(event: React.ChangeEvent<HTMLInputElement>) {
        setServingSize(parseInt(event.target.value));
    }

    //Setting calories
    const [newCalories, setCalories] = useState<number>(-1);

    function updateCalories(event: React.ChangeEvent<HTMLInputElement>) {
        setCalories(parseInt(event.target.value));
    }

    //Setting total fat
    const [newTotalFat, setTotalFat] = useState<number>(-1);

    function updateTotalFat(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalFat(parseInt(event.target.value));
    }

    //Setting cholesterol
    const [newCholesterol, setCholesterol] = useState<number>(-1);

    function updateCholesterol(event: React.ChangeEvent<HTMLInputElement>) {
        setCholesterol(parseInt(event.target.value));
    }

    //Setting sodium
    const [newSodium, setSodium] = useState<number>(-1);

    function updateSodium(event: React.ChangeEvent<HTMLInputElement>) {
        setSodium(parseInt(event.target.value));
    }

    //Setting total carbs
    const [newTotalCarbs, setTotalCarbs] = useState<number>(-1);

    function updateTotalCarbs(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalCarbs(parseInt(event.target.value));
    }

    //Setting total sugars
    const [newTotalSugars, setTotalSugars] = useState<number>(-1);

    function updateTotalSugars(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalSugars(parseInt(event.target.value));
    }

    //Setting protein
    const [newProtein, setProtein] = useState<number>(-1);

    function updateProtein(event: React.ChangeEvent<HTMLInputElement>) {
        setProtein(parseInt(event.target.value));
    }

    //Setting image
    const [newImage, setImage] = useState<string>("");

    function updateImage(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }

    //Assigning values and creating a new meal object
    function createMeal() {
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
                image: newImage
            };
            const copy = [...mealList];
            copy.push(newMeal);
            setMealList(copy);
        } else {
            console.log("Enter valid inputs");
        }
    }

    return (
        <div hidden={!(userType === "superUser")}>
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
                <Button onClick={() => createMeal()}>Add Item</Button>
            </div>
        </div>
    );
}
