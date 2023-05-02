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
import { Navbar } from "./Components/NavBar";
//import { userListProps } from "./Interfaces/userListProps";
//import { User } from "./Components/UserSelect";
//import { userType, setUserType } from "./Components/UserSelect";

function App(): JSX.Element {
    const [userType, setUserType] = useState<string>("superUser");
    const [currentUser, setCurrentUser] = useState<User>({
        name: "None",
        list_of_items: []
    });
    const [userList, setUserList] = useState<User[]>([currentUser]);
    return (
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
            <Counter userType={userType} setUserType={setUserType}></Counter>
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
            <Counter userType={userType} setUserType={setUserType}></Counter>
            <UserTypeIndicator
                userType={userType}
                setUserType={setUserType}
            ></UserTypeIndicator>
        </div>
    );
}
export default App;
