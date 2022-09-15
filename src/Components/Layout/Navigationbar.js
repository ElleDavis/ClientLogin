import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavLink from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Navigationbar =(props)=>{
    return(

        <div>
        <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"> S. Elle Davis</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contacts" >Contacts</Nav.Link> */}
           
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/contacts" >Contacts</NavLink>
            <NavLink to="/portfolio" >Portfolio</NavLink>
            { props.teacher && <span>{props.teacher.username}</span>}
          </Nav>
        </Container>
      </Navbar>
        </div>
       
    )
}
export default Navigationbar