import Header from "../../components/Header"


const Home =({member, setMember})=>{


    return (
        <>
               <Header name={member.name} member={member} setMember={setMember}/>
        </>

    )
}
export default Home