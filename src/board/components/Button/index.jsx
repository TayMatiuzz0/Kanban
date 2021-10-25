import { Add, Text, NewBoard, ComponentNewBoard, Circle, AddItem, Botao, TitleInput } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useBoard } from "../../../context/board"



function Button({ label, color, placeholder, board, isBoard, labelBotao, ...rest }) {

    const [edit, setEdit] = useState(false)
    const [colorState, setColorState] = useState("")
    const [title, setTitle] = useState("")
    const { setBoardData, boardData } = useBoard()

    function handleNewBoard() {
        if (isBoard) {
            const newBoard = {
                name: title,
                color: colorState.hex,
                cards: []
            }
            setBoardData(oldBoard => [...oldBoard, newBoard])
        } else {
            const newCard = boardData.slice()
            newCard[board].cards.push({
                name: title,
                tags: []
            })

            setBoardData(newCard)

        }

        setTitle("")
        toggleEdit()

    }

    function toggleEdit() {
        setEdit(!edit)
    }


    return (

        <Add color={color} {...rest} >
            {
                !edit ? (
                    <AddItem onClick={toggleEdit}>
                        <FontAwesomeIcon icon={faPlus} />
                        <Text>{label}</Text>
                    </AddItem>
                ) :
                    (
                        <NewBoard>

                            <TitleInput defaultValue={title} value={title} name="" id="" cols="32" rows="1" onChange={(e) => setTitle(e.target.value)} placeholder={placeholder}></TitleInput>

                            <ComponentNewBoard >

                                {
                                    isBoard ?

                                        (

                                            <>

                                                <Circle onChange={(color) => setColorState(color)} colors={["#9cd326", "#faa1f1", "#66ccff", "#ffcb00"]} />

                                                <Botao isBoard={isBoard} onClick={handleNewBoard}>{labelBotao}</Botao>

                                            </>
                                        )

                                        :

                                        (
                                            <>
                                                <Botao isBoard={isBoard} onClick={handleNewBoard}>{labelBotao}</Botao>

                                                <Botao className="button-cancelar" onClick={toggleEdit}>Cancelar</Botao>
                                            </>
                                        )
                                }

                            </ComponentNewBoard>
                        </NewBoard>
                    )
            }

        </Add>

    )
}

export default Button;