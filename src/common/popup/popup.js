import React from 'react';
import { Col , Row , Container ,Button } from 'react-bootstrap';
import './popup.css';

const PopUp = () => {
    return ( 
        <React.Fragment>
            <div className="popup">
                <Container>
                    <Row xs={12}>
                        <Col xs={8} >
                            <Row><h5>Thank you!</h5>
                            <p>Your response to India Health Hour is overwhelming</p>
                            </Row>
                            <Row>
                                <Button size="sm">
                                     Know More
                                </Button>
                            </Row>
                        </Col>
                        <Col xs={4} className="popupimage" >
                            <img src="image1.webp" height="90px"  width="100px" />
                        </Col>
                     </Row>
                </Container>
            
                
            </div>
        </React.Fragment>
     );
}
 
export default PopUp;