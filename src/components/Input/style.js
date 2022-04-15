import styled from "styled-components";

const InputStyled = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    border-bottom: 2px solid #cddfe3;
    width: 80%;
    height: 32px;
    margin: 5px;
    padding: 0 5px;
    margin-top: 18px;
    position: relative;
    transition: 0.8s;

    input{
        background: transparent;
        position: absolute;
        padding: 0 25px;
        border: none;
        height: 30px;
        outline: none;
        width: 80%;
        font-size: 16px;
        color: #084e5d;
    }
    svg{
        color: #6ea2ad;
        transition: 0.8s;
    }
    label{
        color: #6ea2ad;
        position: absolute;
        left: 25px;
        top: 3px;
        transition: 0.8s;
        top: ${(props)=>props.valid? "-15px": "3px"  };
        left: ${(props)=>props.valid? "5px": "25px"};
        font-size: ${(props)=>props.valid? "12px": "16px"};

    }

    &:hover, &:focus-within{
        border-bottom: 2px solid #055f72;
        svg{
            color: #055f72;
        }
        label{
            color: #055f72;
        }
    }
    &:focus-within{
        border-bottom: 2px solid #055f72;
        svg{
            color: #055f72;
        }
        label{
            color: #055f72;
            font-size: 12px;
            top: -15px;
            left: 5px;
        }
    }
`

export default InputStyled