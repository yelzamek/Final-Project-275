import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export function Navbar() {
    const [info, setState] = useState<boolean>(false);
    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3 p-3">
            <Container>
                <Nav
                    className="me-auto"
                    style={{ fontSize: "1.5rem", fontStyle: "" }}
                >
                    Balanced Bytes
                </Nav>
                <Button
                    onClick={() => setState(true)}
                    style={{
                        width: "4rem",
                        height: "4rem"
                    }}
                    variant="outline-primary"
                >
                    About Us
                    <div
                        style={{
                            color: "white",
                            width: "1.5 rem",
                            height: "1.5 rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}
                    >
                        3
                    </div>
                </Button>
                <Offcanvas show={info} placement="end">
                    <Offcanvas.Header
                        closeButton
                        onClick={() => setState(false)}
                    >
                        <Offcanvas.Body>
                            Annanya, Josh, Devin, Yasmeen, Sreya
                        </Offcanvas.Body>
                    </Offcanvas.Header>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}