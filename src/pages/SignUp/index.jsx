import Button from "../../components/Button"
import FormHeader from "../../components/FormHeader"
import Input from "../../components/Input"
import Form from "./style"
import { RiUser6Line, RiMailLine, RiLock2Line } from "react-icons/ri"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';



const SignUp = ({setMember})=>{
    
    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string()
          .required("Email obrigatório")
          .email("Email inválido") ,
        name: yup.string()
          .required("Nome obrigatório") ,
        password: yup.string()
          .required("Senha obrigatória")
          .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})", "A senha deve conter, pelo menos: Uma letra maiúscula, Uma letra minúscula, Um número e Um caractere especial"),
        passwordConfirm: yup.string()
          .required('Confirme a senha')
          .oneOf([yup.ref('password')], 'As senhas não estão iguais')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
   

    errors.name?toast.error(errors.name.message, {toastId: 1 }):<></>
    errors.email?toast.error(errors.email.message, {toastId: 2}):<></>
    errors.password?toast.error(errors.password.message, {toastId: 3}):<></>
    errors.passwordConfirm?toast.error(errors.passwordConfirm.message, {toastId: 4}):<></>

    const Submit = (data)=>{
        setMember(data)
        history.push("/home")          
    }
    
    return (
        <>
        <Form onSubmit={handleSubmit(Submit)}>
            <FormHeader/>
            <Input icon={RiUser6Line} label="nome" name="name"  register={register}/>
            <Input icon={RiMailLine} label="email"  name="email" register={register} />
            <Input icon={RiLock2Line} type="password" label="senha" name="password" register={register} />
            <Input icon={RiLock2Line} type="password" label="confimar senha"  name="passwordConfirm" register={register} />
            <Button type="submit" label="SIGN UP"/>
            
        </Form>
        <ToastContainer/>
        </>
    )
}

export default SignUp