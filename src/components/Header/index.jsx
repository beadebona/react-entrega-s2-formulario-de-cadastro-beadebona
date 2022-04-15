import ButtonStyled from "../Button"
import HeaderStyled from "./style"
import { IoIosRocket } from "react-icons/io"
import { HiOutlineLogout } from "react-icons/hi"
import { useHistory } from "react-router-dom"

const Header = ({ name }) =>{
    const history = useHistory()

    console.log(history)
    return(
        <HeaderStyled>
            <div>
                 <IoIosRocket/> 
                 <h2>Bem Vindo, {name}!</h2>
            </div>
       
        <button onClick={() =>history.push("/")}><HiOutlineLogout/></button>
        </HeaderStyled>

    )
}

export default Header