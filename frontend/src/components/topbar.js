import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <div>
            <Container>
                <Navbar bg="light" expand="md" >
                    <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI_2kVBQKFCgZHnHOC5absToKh1iSclyl9w&s" alt="Recipes logo" /> </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav style={{ display: "flex", padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder"}} >
                            {/* <Nav.Link style={{ color: "#343538", fontFamily: "Helvetica" }} href="#LogIn">Log In</Nav.Link> */}
                            {/* <Button variant="success" style={{ fontSize: "16px", marginLeft: "8px", borderRadius: "20px", backgroundColor: "#108910" }}>Sign Up</Button>{' '} */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}