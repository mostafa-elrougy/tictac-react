import react from "react";
import Square from "../Square";
import { render , fireEvent ,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockedOnClick=jest.fn();
test("the 1st player should always be X",()=>{
    render(<Square data-testid="squares-0" onClick={mockedOnClick} />)
    const squareBtn=screen.queryAllByRole('button')

    fireEvent.click(squareBtn[0])
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
})

