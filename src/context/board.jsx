import { useContext, useState, createContext } from "react"


const BoardContext = createContext()

const initialData = [
    {
        name:"📝 To Do",
        color: "#5cc4ff",
        cards: [
            {
                name: "Ajustes fluxo de compra",
                flags: [
                    "flag1",
                    "flag2"
                ]
            },

            {
                name: "Documentar padrões mobile",
                flags: [
                    "flag1",
                    "flag2"
                ]
            }
        ]
    }
]

const BoardProvider = ({children}) => {
    const [boardData, setBoardData] = useState(initialData)

    return(
        <BoardContext.Provider value={{boardData, setBoardData}}>
            {children }
        </BoardContext.Provider>
    )
}

export const useBoard = () => {
    const context = useContext(BoardContext)
    if( !context){
        throw new Error("useBoard must be used within a boardProvider")
    }

    return context;
}

export default BoardProvider