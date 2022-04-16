import styled from "styled-components";

const HeaderStyled = styled.header`

    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(5,95,114,1) 100%);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    div{
        display: flex;
        align-items: center;
        color: white;
    }

    div svg{
        font-size: 30px;
        margin-right: 20px;
    }

    button{
        border: none;
        color: white;
        height: 40px;
        border-radius: 25px;
        padding: 12px;
        font-size: 18px;
        transition: 0.8s;
        background: #055f72;
    
    }
    button:hover{
        filter: brightness(1.4);
    }
`

export default HeaderStyled