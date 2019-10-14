// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

test("Gate defaults to unlocked and open", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    getByText(/open/i);
    expect(queryByText(/open gate/i)).toBeNull();
    getByText(/unlocked/i);
    expect(queryByText(/unlock gate/i)).toBeNull();
})



test("Shows the controls and display", () => {
    const { getByText, getAllByText } = render(<Dashboard />);
    // controls
    getByText(/locked/);
    // display
    getAllByText(/gate/i);
});