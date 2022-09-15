import { FiGithub} from 'react-icons/fi'
import { AiOutlineLinkedin} from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'
import { useState, useEffect} from "react"
import  Navigationbar from "../Layout/Navigationbar"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Contacts =()=>{
    // const {repos}=props
    const [myaccount, setMyAccount]=useState(null)

//  useEffect(()=>{
//     fetch("https://api.github.com/users/ElleDavis/repos")
//     .then((res)=> res.json())
//     .then(data => setMyAccount(data))
//  },[])
useEffect(()=>{
    fetch("https://api.github.com/users/ElleDavis")
    .then((res)=> res.json())
    .then(data => setMyAccount(data))
 },[])
    return(
       <div className="buttonContainer">
        <Navigationbar/>
        <h2> Lets Connect </h2>
           
            <form>
            <Button  id="LinkedIn" action="https://www.linkedin.com/in/elle-davis/" method="get" target="_blank" variant="primary" type="submit">< AiOutlineLinkedin className="icon"/></Button>
            <Button  id="Github" action="https://github.com/ElleDavis" method="get" target="_blank" variant="primary" type="submit">< FiGithub className="icon"/></Button>
            <Button id="Email" action="" method="get" target="_blank" variant="primary" href = "mailto: ShanitriceDavis@gmail.com">< HiOutlineMail className="icon"/></Button> 
            </form>
            {/* <div>
                {myaccount && (
                    <ul>
                    {myaccount.map(repos => ( <li key={repos.id}>{repos.name}</li> ))}
                    </ul>
                )}
             </div> */}


             {/* <div>
                {myaccount && (
                    <h1>
                    { myaccount.name}
                    </h1>
                )}
             </div> */}

             <div>
                {myaccount && (
                    <Card style={{ width: '18rem' }}>
                        {myaccount.name}
                        <Card.Img variant="top" src={myaccount.avatar_url} alt={myaccount.name} />
                        <Card.Body>
                            {/* <Card.Title>{myaccount.name}</Card.Title> */}
                            {/* <Card.Text id="cardtext">{myaccount.bio}</Card.Text> */}
                            {/* <p id="cardtext">{myaccount.bio}</p> */}
                            <Button variant="primary" href={myaccount.html_url}>Go to Github</Button>
                        </Card.Body>
                 </Card>
                )}
             </div>
       </div>
    )
}
export default Contacts