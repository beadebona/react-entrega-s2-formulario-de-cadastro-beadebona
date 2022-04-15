import Header from "../../components/Header"
import { useHistory } from "react-router-dom"

const Home =()=>{
    const history = useHistory()
    return (
        <>
               <Header name="Bea"/>
               <button onClick={() =>history.push("/")}>sair meu deus</button>
        </>

    )
}
export default Home