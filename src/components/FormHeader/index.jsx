import FormHeaderStyled from "./style";
import { IoIosRocket } from "react-icons/io"

const FormHeader = () =>{
    return (
        <FormHeaderStyled>
            <IoIosRocket/>
            <h2> Welcome to Rocket!</h2>
        </FormHeaderStyled>
    )
}

export default FormHeader