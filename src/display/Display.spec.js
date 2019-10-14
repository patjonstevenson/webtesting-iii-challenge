// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

// Shows the 
test("Display renders without error", () => {
    render(<Display />);
});

test("Displays closed if closed is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
});

test("Displays open if closed is false", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
});