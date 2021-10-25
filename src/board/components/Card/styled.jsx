import styled from "styled-components"
import { LightenDarkenColor } from "../../../utils"



export const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
    padding: 5px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`


export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

export const DropdownContent = styled.div`
    display: ${props => props.active ? "flex" : "none"};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-top: 5px solid ${(props) => LightenDarkenColor(props.color, -20)};
    position: absolute;
    background-color: ${props => props.color};
    min-width: 190px;
    padding: 12px 16px;
    z-index: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
`

export const NavDrop = styled.a`
    width: 100%;
    text-decoration: none;
    color: white;
`