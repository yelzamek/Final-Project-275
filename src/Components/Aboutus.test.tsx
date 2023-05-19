import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Aboutus } from "./Aboutus";
import { PointerProps } from "../Interfaces/PointerProps";

test("renders Aboutus component without error", () => {
    const mockSetPointerEventsEnabled = jest.fn();
    render(
        <Aboutus
            setPointerEventsEnabled={mockSetPointerEventsEnabled}
            pointerEventsEnabled={true}
        />
    );
});
test("renders 'About us' button", () => {
    const mockSetPointerEventsEnabled = jest.fn();
    render(
        <Aboutus
            setPointerEventsEnabled={mockSetPointerEventsEnabled}
            pointerEventsEnabled={true}
        />
    );
    const buttonElement = screen.getByText("About us");
    expect(buttonElement).toBeInTheDocument();
});
test("clicking 'About us' button opens the popup", () => {
    const mockSetPointerEventsEnabled = jest.fn();
    render(
        <Aboutus
            setPointerEventsEnabled={mockSetPointerEventsEnabled}
            pointerEventsEnabled={true}
        />
    );
    const buttonElement = screen.getByText("About us");
    fireEvent.click(buttonElement);
    expect(mockSetPointerEventsEnabled).toHaveBeenCalledWith(false);
});
test("setPointerEventsEnabled function is called correctly", () => {
    const mockSetPointerEventsEnabled = jest.fn();
    render(
        <Aboutus
            setPointerEventsEnabled={mockSetPointerEventsEnabled}
            pointerEventsEnabled={true}
        />
    );
    const buttonElement = screen.getByText("About us");
    fireEvent.click(buttonElement);
    const closeButtonElement = screen.getByText("Close");
    fireEvent.click(closeButtonElement);
    expect(mockSetPointerEventsEnabled).toHaveBeenCalledTimes(2);
    expect(mockSetPointerEventsEnabled).toHaveBeenNthCalledWith(1, false);
    expect(mockSetPointerEventsEnabled).toHaveBeenNthCalledWith(2, true);
});
test("closing the popup by clicking the 'Close' button", () => {
    const mockSetPointerEventsEnabled = jest.fn();
    const mockProps: PointerProps = {
        setPointerEventsEnabled: mockSetPointerEventsEnabled,
        pointerEventsEnabled: false
    };

    render(<Aboutus {...mockProps} />);
    expect(
        screen.queryByText(
            "Made by Team 12: Annanya, Josh, Devin, Sreya and Yasmeen!"
        )
    ).not.toBeInTheDocument();
    const aboutUsButton = screen.getByText("About us");
    fireEvent.click(aboutUsButton);
    expect(
        screen.getByText(
            "Made by Team 12: Annanya, Josh, Devin, Sreya and Yasmeen!"
        )
    ).toBeInTheDocument();
    const closeButtonElement = screen.getByText("Close");
    fireEvent.click(closeButtonElement);
    expect(mockSetPointerEventsEnabled).toHaveBeenCalledWith(true);
    expect(
        screen.queryByText(
            "Made by Team 12: Annanya, Josh, Devin, Sreya and Yasmeen!"
        )
    ).not.toBeInTheDocument();
});
