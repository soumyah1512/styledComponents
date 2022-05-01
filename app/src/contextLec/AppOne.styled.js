import styled from "styled-components";

export const Border = styled.div`
display: flex;
margin: 50px auto;
border: 1px solid black;
text-align: center;

`

export const Div = styled.div`
width:100%;
margin:auto;
color: ${(props) => props.color};
background-color: ${(props) => props.color === "white" ? "black":"white"};
`