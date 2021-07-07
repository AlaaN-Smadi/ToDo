import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormPage extends React.Component {
    render() {
        return (
            <div style={{marginTop:"10px"}}>
                

                <Row md={1} className="g-4">
                    <div style={{ textAlign: "center", borderRadius: "35px", background: "#000150", padding: "15px", color: "wheat", marginLeft: "25%", width: "50%", marginBottom: "25px" }}>

                        <Form onSubmit={this.props.submitBut} style={{ width: "50%", marginLeft: "25%", marginRight: "25%" }} >


                            <Form.Group aria-label="Default select example">
                                <Form.Control name="cityName" placeholder=" City Name " />


                                <Button variant="primary" type="submit" style={{ marginTop: "15px" }}> Explore! </Button>
                            </Form.Group>


                        </Form>
                    </div>
                </Row>
            </div>
        )
    }
}

export default FormPage
