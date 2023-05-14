/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./UsersWithItemPopup.css";

export function PopUp(): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <Button id="openPopup" onClick={handleOpenPopup}>
                Open Popup
            </Button>

            {showPopup && (
                <div id="popupOverlay" className="show">
                    <div id="popupContent">
                        <h2>Popup Content</h2>
                        <p>This is a popup.</p>
                        <button id="closePopup" onClick={handleClosePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
