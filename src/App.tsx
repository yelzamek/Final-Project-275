import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
import { UserTypeIndicator } from "./Components/UserTypeIndicator";
import { Counter } from "./Components/SuperUserButton";
import { UserSelect } from "./Components/UserSelect";
//import { User } from "./Components/UserSelect";
//import { userType, setUserType } from "./Components/UserSelect";

function App(): JSX.Element {
    const [userType, setUserType] = useState<string>("superUser");
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
            ></UserDropDown>
            <UserTypeIndicator
                userType={userType}
                setUserType={setUserType}
            ></UserTypeIndicator>
            <Counter userType={userType} setUserType={setUserType}></Counter>
            <UserSelect></UserSelect>
        </div>
    );
}

export default App;
