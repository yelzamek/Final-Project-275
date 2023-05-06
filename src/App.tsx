import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
import { UserTypeIndicator } from "./Components/UserTypeIndicator";
import { Counter } from "./Components/SuperUserButton";
import { UserSelect } from "./Components/AddUser";
import {
    SuperUserSelectButton,
    AdminSelectButton
} from "./Components/UserTypeSelectButtons";
import { User } from "./Interfaces/UserObject";
import { DropBox } from "./Components/Draggable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CenterList } from "./Components/Centerlist";
import { MEAL_LIST } from "./Interfaces/MealObject";
import { Meal } from "./Interfaces/MealObject";
import { Navbar } from "./Components/NavBar";
import { UserList } from "./Components/UserList";
//import { userListProps } from "./Interfaces/userListProps";
//import { User } from "./Components/UserSelect";
//import { userType, setUserType } from "./Components/UserSelect";

function App(): JSX.Element {
    const [userType, setUserType] = useState<string>("superUser");
    const [mealList, setMealList] = useState<Meal[]>(MEAL_LIST);
    const [currentUser, setCurrentUser] = useState<User>({
        name: "User1",
        list_of_items: []
    });
    const [userList, setUserList] = useState<User[]>([currentUser]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="header">
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
                </header>
                <p className="App-header">Team 12</p>
                <Navbar></Navbar>
                <UserTypeIndicator
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
                ></UserDropDown>
                <Counter
                    userType={userType}
                    setUserType={setUserType}
                ></Counter>
                <UserSelect
                    userType={userType}
                    setUserType={setUserType}
                    userList={userList}
                    setUserList={setUserList}
                ></UserSelect>
                <AdminSelectButton
                    userType={userType}
                    setUserType={setUserType}
                ></AdminSelectButton>
                <SuperUserSelectButton
                    userType={userType}
                    setUserType={setUserType}
                ></SuperUserSelectButton>
                <Counter
                    userType={userType}
                    setUserType={setUserType}
                ></Counter>
                <UserTypeIndicator
                    userType={userType}
                    setUserType={setUserType}
                ></UserTypeIndicator>
                <CenterList
                    mealList={mealList}
                    setMealList={setMealList}
                ></CenterList>
                <DropBox></DropBox>
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
            </div>
        </DndProvider>
    );
}
export default App;
