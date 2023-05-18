/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./Aboutus.css";
import { PointerProps } from "../Interfaces/PointerProps";

export function Aboutus({
    setPointerEventsEnabled
}: PointerProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
        setPointerEventsEnabled(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPointerEventsEnabled(true);
    };

    return (
        <div>
            <ChakraProvider>
                <Button
                    style={{ transform: "translateX(100px)" }}
                    id="About Us"
                    variant={"outline"}
                    onClick={handleOpenPopup}
                    colorScheme="green"
                >
                    About us
                </Button>
            </ChakraProvider>

            {showPopup && (
                <div id="popupOverlay" className="show">
                    <div id="popupContent">
                        <p>
                            Made by Team 12: Annanya, Josh, Devin, Sreya and
                            Yasmeen!
                        </p>
                        <Button id="closePopup" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
