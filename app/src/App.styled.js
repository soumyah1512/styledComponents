import styled from 'styled-components'

export const AppStyled = styled.div`
    font-family: sans-serif;
    text-align: center;
`

export const BoldLabel = styled.label`
font-weight: bold
`

export const FormWrapper = styled.form`
background-color: ${(props)=> (props.isColorFull ? "red" : "green")} 
`