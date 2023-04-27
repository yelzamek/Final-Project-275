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
//import { DndProvider } from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";
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
                <a href="#" className="logo">
                    {" "}
                    <i className="fa fa-shopping-basket"></i> grocery
                </a>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Team 12 Joshua Martinez, Yasmeen Elzamek, Devin Cummings,
                Annanya Venkataraman, Sreya Venkatesh.
            </p>
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
