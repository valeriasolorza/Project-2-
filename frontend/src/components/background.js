import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "80vw", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "80vw", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold", marginRight: "50px" }}>
                            Search for Your Favorite Recipes
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1.5em", marginRight: "50px" }}>
                            Whatever you want to make
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   Search Recipe                                        ->" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "100%", marginTop: "75px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://m.media-amazon.com/images/I/61+FjwbQ3gL._AC_UF1000,1000_QL80_.jpg" alt="Recipe Book" />
            </div>
            
        </div>
    )
}