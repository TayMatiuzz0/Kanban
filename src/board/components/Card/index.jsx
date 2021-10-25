import { Card, Header, Dropdown, DropdownContent, NavDrop } from "./styled"
import React, { useEffect, useRef, useState } from "react"
import Tag from "../Tag"
import { useBoard } from "../../../context/board"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"

const Cardboard = React.forwardRef(({ subtitle, tagColor, board, card, ...rest }) => {

    const { boardData, setBoardData } = useBoard()
    const [activeDropdown, setActiveDropdown] = useState(false)
    const dropdownRef = useRef(null)
    const [hasNext, setHasNext] = useState(true)
    const [hasPrevious, setHasPrevious] = useState(true)

    function handleDelete() {
        const newBoard = boardData.slice()
        newBoard[board].cards.splice(card, 1)
        setBoardData(newBoard)
    }


    function handleNext() {
        const newBoard = boardData.slice()
        const newCard = newBoard[board].cards[card]
        newBoard[board + 1].cards.push(newCard)

        newBoard[board].cards.splice(card, 1)

        setBoardData(newBoard)
    }

    function handlePrevious() {
        const newBoard = boardData.slice()
        const newCard = newBoard[board].cards[card]
        newBoard[board - 1].cards.push(newCard)

        newBoard[board].cards.splice(card, 1)

        setBoardData(newBoard)
    }

    useEffect(() => {
        if (board < boardData.length - 1)
            setHasNext(true)
        else
            setHasNext(false)


        if (board > 0)
            setHasPrevious(true)
        else
            setHasPrevious(false)

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, boardData])



    return (
        <Card>

            <Header>
                {subtitle}
                <Dropdown ref={dropdownRef} onClick={() => setActiveDropdown(!activeDropdown)}>
                    <FontAwesomeIcon icon={faEllipsisV} size="xs" />
                    <DropdownContent color={tagColor} active={activeDropdown}>
                        {
                            hasNext && <NavDrop onClick={handleNext}>Mover para próximo</NavDrop>
                        }

                        {
                            hasPrevious && <NavDrop onClick={handlePrevious}>Mover para anterior</NavDrop>
                        }

                        <NavDrop onClick={handleDelete}>Excluir</NavDrop>
                    </DropdownContent>
                </Dropdown>
            </Header>

            <Tag tagColor={tagColor} />
        </Card>
    )
});
export default Cardboard;