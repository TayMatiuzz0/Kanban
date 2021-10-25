import styled from "styled-components"

export const Container = styled.div`

`

export const Wrap = styled.div`
    width: 315px;
    padding: 12px 20px 20px 20px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    border-top: 5px solid ${(props) => props.borderColor};
    margin-right: 20px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
`