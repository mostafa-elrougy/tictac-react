import react from "react";
import App from "../App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", ()=>{
    const component=render(<App />)
    const headerElement=component.getByTestId("header")
    expect(headerElement.textContent).toBe("Tic-Tac-Toe")
})