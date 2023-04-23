import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
import { UserTypeIndicator } from "./Components/UserTypeIndicator";
import { Counter } from "./Components/SuperUserButton";
import { UserSelect } from "./Components/UserSelect";
import {
    SuperUserSelectButton,
    AdminSelectButton
} from "./Components/UserTypeSelectButtons";
import { User } from "./Components/UserObject";
import { userListProps } from "./Interfaces/userListProps";
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
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Team 12 Joshua Martinez, Yasmeen Elzamek, Devin Cummings,
                Annanya Venkataraman, Sreya Venkatesh.
            </p>
            <UserDropDown
                userType={userType}
                setUserType={setUserType}
                userList={userList}
                setUserList={setUserList}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            ></UserDropDown>
            <UserTypeIndicator
                userType={userType}
                setUserType={setUserType}
            ></UserTypeIndicator>
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
        </div>
    );
}

export default App;
