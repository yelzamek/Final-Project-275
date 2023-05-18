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
                    id="About Us"
                    onClick={handleOpenPopup}
                    colorScheme="green"
                >
                    About us
                </Button>
            </ChakraProvider>

            {showPopup && (
                <div id="popupOverlay" className="show">
                    <div id="popupContent">
                        <p>This is the popup content.</p>
                        <Button id="closePopup" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
