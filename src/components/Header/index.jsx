import HeaderStyled from "./style"
import { IoIosRocket } from "react-icons/io"
import { HiOutlineLogout } from "react-icons/hi"
import { useHistory } from "react-router-dom"

const Header = ({ name, setMember }) =>{
    const history = useHistory()

    const handleLogout = () =>{
        history.push("/")
        setMember()
    }

    return(
        <HeaderStyled>
            <div>
                 <IoIosRocket/> 
                 <h2>Welcome, {name}!</h2>
            </div>
       
        <button onClick={handleLogout}><HiOutlineLogout/></button>
        </HeaderStyled>

    )
}

export default Header