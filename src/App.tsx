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
import { AdminList } from "./Components/adminList";
import { Sidebar } from "./Components/Sidebar";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { NutritionalTotalButton } from "./Components/NutritionTotalButton";
import { FilterChoices } from "./Components/FilterButtons";
import { PopUp } from "./Components/UsersWithItemPopup";

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
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                {/* <header className="header">
                    <header className="header"></header>
                    <a href="#" className="logo">
                        {" "}
                        <i className="fa fa-shopping-basket"></i>
                    </a>
                    <nav className="NavBar">
                        <a href="#Home"> Home</a>
                        <a href="#About Us"> About Us</a>
                    </nav>
                    <div className="icons"></div>
                    <div className="fa fa-bars" id="menu-btn"></div>
                    <a href="#" className="logo">
                        {" "}
                        <i className="fa fa-shopping-basket"></i> grocery
                    </a>
                </header> */}
                <p className="App-header">
                    Balanced Bytes Team 12 by Josh,Devin,Annanya,Yasmeen & Sreya
                    <SuperUserSelectButton
                        userType={userType}
                        setUserType={setUserType}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        userList={userList}
                        setUserList={setUserList}
                    ></SuperUserSelectButton>
                    <AdminSelectButton
                        userType={userType}
                        setUserType={setUserType}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        userList={userList}
                        setUserList={setUserList}
                    ></AdminSelectButton>
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
                </p>
                {/* <Navbar></Navbar> */}
                {/* <UserTypeIndicator
                    userType={userType}
                    setUserType={setUserType}
                ></UserTypeIndicator>
                <UserDropDown
                    userType={userType}
                    setUserType={setUserType}
                    userList={userList}
                    setUserList={setUserList}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                ></UserDropDown> */}
                <p className="App-Div"></p>{" "}
                <AddUser
                    userType={userType}
                    setUserType={setUserType}
                    userList={userList}
                    setUserList={setUserList}
                ></AddUser>
                {/* <SuperUserSelectButton
                    userType={userType}
                    setUserType={setUserType}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    userList={userList}
                    setUserList={setUserList}
                ></SuperUserSelectButton> */}
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
