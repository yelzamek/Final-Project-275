import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
import {
    SuperUserSelectButton,
    AdminSelectButton
} from "./Components/UserTypeSelectButtons";
import { User } from "./Interfaces/UserObject";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CenterList } from "./Components/Centerlist";
import { MEAL_LIST } from "./Interfaces/MealObject";
import { Meal } from "./Interfaces/MealObject";
// import { Navbar } from "./Components/NavBar";
//import { UserList } from "./Components/UserList";
import { AddUser } from "./Components/AddUser";
import { UserList } from "./Components/UserList";
import { AddMeal } from "./Components/AddMeal";
import { SortFunction } from "./Components/SortFunction";
//import { userListProps } from "./Interfaces/userListProps";
//import { NutritionalTotalButton } from "./Components/NutritionTotalButton";
import { AdminList } from "./Components/AdminListComponent";
import { Sidebar } from "./Components/Sidebar";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { NutritionalTotalButton } from "./Components/NutritionTotalButton";
import { FilterChoices } from "./Components/FilterButtons";
import { Aboutus } from "./Components/Aboutus";

function App(): JSX.Element {
    const [userType, setUserType] = useState<string>("User");
    const [mealList, setMealList] = useState<Meal[]>(MEAL_LIST);
    const [adminList, setAdminList] = useState<Meal[]>([]);
    const [filterChoices, setFilterChoices] = useState<string[]>([]);
    const [currentUser, setCurrentUser] = useState<User>({
        name: "User1",
        list_of_items: [],
        list_of_favorites: []
    });
    const noneUser: User = {
        name: "None",
        list_of_items: [],
        list_of_favorites: []
    };
    const [userList, setUserList] = useState<User[]>([noneUser, currentUser]);
    const [pointerEventsEnabled, setPointerEventsEnabled] = useState(true);
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={pointerEventsEnabled ? "App" : "App-NoPointer"}>
                <div className="App-header">
                    <Box>
                        <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            color="green.500"
                        >
                            Balanced Bytes
                        </Text>
                        <Text fontSize="lg" color="gray.500">
                            Team 12 by Josh, Devin, Annanya, Yasmeen & Sreya
                        </Text>
                    </Box>
                    <SuperUserSelectButton
                        userType={userType}
                        setUserType={setUserType}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        userList={userList}
                        setUserList={setUserList}
                        filterChoices={filterChoices}
                        setFilterChoices={setFilterChoices}
                    ></SuperUserSelectButton>
                    <AdminSelectButton
                        userType={userType}
                        setUserType={setUserType}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        userList={userList}
                        setUserList={setUserList}
                        filterChoices={filterChoices}
                        setFilterChoices={setFilterChoices}
                    ></AdminSelectButton>
                    <Aboutus
                        setPointerEventsEnabled={setPointerEventsEnabled}
                        pointerEventsEnabled={pointerEventsEnabled}
                    />
                    <UserDropDown
                        mealList={mealList}
                        setMealList={setMealList}
                        userType={userType}
                        setUserType={setUserType}
                        userList={userList}
                        setUserList={setUserList}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                    ></UserDropDown>
                </div>
                {/* <Navbar></Navbar> */}
                <p className="App-Div"></p>{" "}
                <AddUser
                    userType={userType}
                    setUserType={setUserType}
                    userList={userList}
                    setUserList={setUserList}
                ></AddUser>
                <SortFunction
                    mealList={mealList}
                    setMealList={setMealList}
                ></SortFunction>
                <FilterChoices
                    filterChoices={filterChoices}
                    setFilterChoices={setFilterChoices}
                    userType={userType}
                    setUserType={setUserType}
                ></FilterChoices>
                <CenterList
                    mealList={mealList}
                    setMealList={setMealList}
                    userType={userType}
                    setUserType={setUserType}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    userList={userList}
                    setUserList={setUserList}
                    filterChoices={filterChoices}
                    setFilterChoices={setFilterChoices}
                    pointerEventsEnabled={pointerEventsEnabled}
                    setPointerEventsEnabled={setPointerEventsEnabled}
                ></CenterList>
                <AddMeal
                    mealList={mealList}
                    setMealList={setMealList}
                    userType={userType}
                    setUserType={setUserType}
                ></AddMeal>
                <Sidebar></Sidebar>
                <p className="App-Sidebar">
                    <ChakraProvider>
                        <Text fontSize="xl" fontWeight="bold">
                            Meal Log
                        </Text>
                        <UserList
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            userList={userList}
                            setUserList={setUserList}
                            mealList={mealList}
                            setMealList={setMealList}
                            userType={userType}
                            setUserType={setUserType}
                        ></UserList>
                        <NutritionalTotalButton
                            list_of_items={currentUser.list_of_items}
                            list_of_favorites={currentUser.list_of_favorites}
                            name={currentUser.name}
                            userType={userType}
                            setUserType={setUserType}
                        ></NutritionalTotalButton>
                        <AdminList
                            userList={userList}
                            setUserList={setUserList}
                            mealList={mealList}
                            setMealList={setMealList}
                            userType={userType}
                            setUserType={setUserType}
                            adminList={adminList}
                            setAdminList={setAdminList}
                        ></AdminList>
                    </ChakraProvider>
                </p>
            </div>
        </DndProvider>
    );
}
export default App;
