import styled from "styled-components"
import { CirclePicker } from "react-color"


export const Add = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;


    .button-cancelar{
            margin-left: 10px;
        }
`

export const AddItem = styled.a`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    :hover{
        color: #e1e8ed;
    }
`

export const Text = styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    margin: 0;
    margin-left: 10px;
`

export const NewBoard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

export const TitleInput = styled.textarea`
        padding: 5px 10px;
        resize: none;
        border-radius: 10px;
`

export const ComponentNewBoard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export const Botao = styled.button`
        margin-top: 15px;
        background-color: #0079bf;
        border: #0079bf;
        box-shadow: none;
        color: #fff;
        border-radius: 5px;
        width: ${props => props.isBoard ? "35%" : "100%"};
        padding: 5px 20px;
        font-size: 12px;
`

export const Circle = styled(CirclePicker)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    width: 80% !important;
`