import React, { useState } from "react";
import "./App.css";
import { UserDropDown } from "./Components/UserDropdown";
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
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <UserDropDown
                userType={userType}
                setUserType={setUserType}
            ></UserDropDown>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: userType === "Admin" ? "inline-block" : "none",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}

export default App;
