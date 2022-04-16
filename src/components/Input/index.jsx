import { useState } from "react"
import InputStyled from "./style"

const Input = ({ icon:Icon, label, name, register, ...rest }) =>{
    const [isValid, setIsValid] = useState(false)

    return (
        <InputStyled valid={isValid}>
           
            <label>{label.toUpperCase()}</label>
            <Icon/>
            <input
             {...rest} {...register(name)}
            onChange={(evt) => evt.target.value=== ""? setIsValid(false): setIsValid(true)}/>

        </InputStyled>
    )
}

export default Input