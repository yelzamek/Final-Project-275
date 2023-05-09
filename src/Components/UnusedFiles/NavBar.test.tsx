import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "./NavBar";

describe("Navbar", () => {
    it("should render the title", () => {
        render(<Navbar />);
        expect(screen.getByText("Balanced Bytes")).toBeInTheDocument();
    });

    it("should open the offcanvas when the About Us button is clicked", () => {
        render(<Navbar />);
        const button = screen.getByText("About Us");
        fireEvent.click(button);
        expect(
            screen.getByText("Annanya, Josh, Devin, Yasmeen, Sreya")
        ).toBeInTheDocument();
    });

    it("should close the offcanvas when the close button is clicked", () => {
        render(<Navbar />);
        const button = screen.getByText("About Us");
        fireEvent.click(button);
        const closeButton = screen.getByRole("button", { name: "Close" });
        fireEvent.click(closeButton);
        expect(
            screen.queryByText("Annanya, Josh, Devin, Yasmeen, Sreya")
        ).not.toBeInTheDocument();
    });
    it("should render correct Navbar text", () => {
        const { getByText } = render(<Navbar />);
        const navbarText = getByText("Balanced Bytes");
        expect(navbarText).toBeInTheDocument();
    });
    it("should show Offcanvas when 'About Us' button is clicked", () => {
        const { getByText } = render(<Navbar />);
        const aboutUsButton = getByText("About Us");
        fireEvent.click(aboutUsButton);
        const offCanvas = getByText("Annanya, Josh, Devin, Yasmeen, Sreya");
        expect(offCanvas).toBeInTheDocument();
    });
    //bottom are repeated
    it("opens the offcanvas when the 'About Us' button is clicked", () => {
        render(<Navbar />);
        const aboutUsButton = screen.getByText("About Us");
        fireEvent.click(aboutUsButton);
        const offcanvas = screen.getByRole("dialog");
        expect(offcanvas).toBeInTheDocument();
    });
    it("closes the offcanvas when the close button is clicked", () => {
        render(<Navbar />);
        const aboutUsButton = screen.getByText("About Us");
        fireEvent.click(aboutUsButton);
        const closeButton = screen.getByLabelText("Close");
        fireEvent.click(closeButton);
        const offcanvas = screen.queryByRole("dialog");
        expect(offcanvas).not.toBeInTheDocument();
    });
});
