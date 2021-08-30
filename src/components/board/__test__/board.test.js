import react from "react";
//import Game from "../Game";
import Board from "../../board/Board";
import Square from "../../square/Square";
import { fireEvent, render , screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";



test("should render 9 squares ", ()=>{
    render(<Board  squares={Array(9).fill(null)}/>)
    const allSquares = screen.queryAllByTestId(/square-/g);
    
    const squareBtn=screen.getAllByRole("button")
    expect(squareBtn.length).toBe(9)
})
