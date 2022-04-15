import Button from "../../components/Button"
import FormHeader from "../../components/FormHeader"
import Input from "../../components/Input"
import Form from "./style"
import { RiUser6Line, RiMailLine, RiLock2Line } from "react-icons/ri"
import { useHistory } from "react-router-dom"

const SignUp = ()=>{

    const history = useHistory()

    return (
        <>
        <Form>
            <FormHeader/>
            <Input icon={RiUser6Line} label="nome"/>
            <Input icon={RiMailLine} label="email"/>
            <Input icon={RiLock2Line} label="senha"/>
            <Input icon={RiLock2Line} label="confimar senha"/>
            <Button label="SIGN UP"/>
            
        </Form>
        <Button onclick={()=> history.push('/home')} label="HOME"/>
        </>
    )
}

export default SignUp