// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

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