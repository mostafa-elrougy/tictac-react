import react from "react";
import Game from "../Game";
import Board from "../../board/Board";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import history from "../Game"
describe("restart btn",()=>{
    test("restart button renders with correct text",()=>{
        const component=render(<Game />)
        const restartBtn=component.getByTestId("restart")
        expect(restartBtn.textContent).toBe("Restart");
    })
//     const MockedBoard=({array})=>{
// return (
//     <Board squares={array}/>
// )
//     }
   //est("restart btn rerenders the page",()=>{
//         let squares=Array(9).fill("X")
//     render(<MockedBoard array={squares} />)
//     const component=render(<Game />)
//         const restartBtn=component.getByTestId("restart")
//         fireEvent.click(restartBtn);
//         expect(squares[4]).toBe(null)
// })
})
describe("header of winner or next player",()=>{
    test("header should start with next player X",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        expect(header.textContent).toBe("Next Player: X")
    })
    test("header should be next player O after clicking on any square",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')

        fireEvent.click(squareBtn[0])
        expect(header.textContent).toBe("Next Player: O")
    })
    test("header should be winner X when X wins",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')

        fireEvent.click(squareBtn[0])//X
        fireEvent.click(squareBtn[5])
        fireEvent.click(squareBtn[1])//X
        fireEvent.click(squareBtn[6])
        fireEvent.click(squareBtn[2])

        expect(header.textContent).toBe("Winner: X")
        
    })
    test("header should be winner O when O wins",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')
        
        fireEvent.click(squareBtn[5])
        fireEvent.click(squareBtn[0])
        fireEvent.click(squareBtn[6])
        fireEvent.click(squareBtn[1])
        fireEvent.click(squareBtn[8])
        fireEvent.click(squareBtn[2])

        expect(header.textContent).toBe("Winner: O")
        fireEvent.click(squareBtn[3])
        expect(squareBtn.textContent).toBeFalsy();
    })
    test("header should not change when clicking the same button twice",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')
        fireEvent.click(squareBtn[5])
        expect(header.textContent).toBe("Next Player: O")
        fireEvent.click(squareBtn[5])
        expect(header.textContent).toBe("Next Player: O")
    })
})
describe("board buttons", ()=>{
    test("when clicking a button its text changes to X then another click changes to O",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')
        
        fireEvent.click(squareBtn[5])
        expect(squareBtn[5].textContent).toBe("X")  
        fireEvent.click(squareBtn[7])
        expect(squareBtn[7].textContent).toBe("O")  
    })
    test("clicking a btn after winning does nth",()=>{
        const component=render(<Game />);
        const header =component.getByTestId("header2")
        const squareBtn=screen.queryAllByRole('button')
         
        fireEvent.click(squareBtn[5])
        fireEvent.click(squareBtn[0])
        fireEvent.click(squareBtn[6])
        fireEvent.click(squareBtn[1])
        fireEvent.click(squareBtn[8])
        fireEvent.click(squareBtn[2])

        fireEvent.click(squareBtn[3])
        expect(squareBtn.textContent).toBeFalsy();
    })
})



