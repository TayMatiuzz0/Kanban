import styled from "styled-components"

export const Tag = styled.small`
    /* font-family: roboto; */
    font-size: 12px;
    font-weight: 700;
    line-height: 14.02px;
    background-color: ${(props) => props.tagColor};
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
    color: #FFFFFF ;
`
