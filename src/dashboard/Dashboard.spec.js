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

test("Gate cannot be opened if locked", () => {

    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} toggleClosed={toggleClosedMock} />);

    fireEvent.click(getByText(/open/i));
    expect(toggleClosedMock).toHaveBeenCalledTimes(0);
})

test("Gate cannot be locked if open", () => {
    const toggleLockedMock = jest.fn();

    const { getByText } = render(<Controls locked={false} closed={false} toggleLocked={toggleLockedMock} />);

    fireEvent.click(getByText(/lock/i));
    expect(toggleLockedMock).toHaveBeenCalledTimes(0);
})

test("Shows the controls and display", () => {

});