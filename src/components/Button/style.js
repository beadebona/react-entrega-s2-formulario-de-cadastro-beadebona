import styled from "styled-components";

const ButtonStyled = styled.button`
    border: none;
    color: white;
    background: rgb(255,255,255);
    background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(154,190,198,1) 0%, rgba(63,132,146,1) 60%, rgba(5,95,114,1) 100%);
    height: 40px;
    margin-top: 20px;
    border-radius: 25px;
    width: 200px;
    font-size: 18px;
    transition: 0.8s;

    &:hover{
        filter: brightness(1.2)
    }

`

export default ButtonStyled