import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
import { UserTypeIndicator } from "./Components/UserTypeIndicator";
import { Counter } from "./Components/SuperUserButton";
<<<<<<< HEAD
import "./Components/HomePage.css";
=======
import { UserSelect } from "./Components/AddUser";
import {
    SuperUserSelectButton,
    AdminSelectButton
} from "./Components/UserTypeSelectButtons";
import { User } from "./Interfaces/UserObject";
//import { userListProps } from "./Interfaces/userListProps";
>>>>>>> d0606acbd2d62a1225ae39f67636921afe962dbd
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
<<<<<<< HEAD

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#aboutus">aboutus</a>
            </nav>

            <UserDropDown
                userType={userType}
                setUserType={setUserType}
            ></UserDropDown>
=======
>>>>>>> d0606acbd2d62a1225ae39f67636921afe962dbd
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
<<<<<<< HEAD
            <UserTypeIndicator
                userType={userType}
                setUserType={setUserType}
            ></UserTypeIndicator>
=======
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
>>>>>>> d0606acbd2d62a1225ae39f67636921afe962dbd
        </div>
    );
}

export default App;
