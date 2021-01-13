import React from 'react';
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './safety.css';

const Safety = () => {
    return ( 
        <React.Fragment>
            <div className="safety" >
                 <main  className="container">
                    <div className="row">
                          <div className="col-md-6" >
                              <div className="safety-div" >
                              <h4 className="top-priority" >Safety of your data is our 
                                 top priority. </h4>
                                 <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Multi level Security check</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Multiple data backup</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Stringent data privacy policies</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button className="button-safety" >
                                       Read More
                                     </Button>
                                   </Link> 
                                 </div>
                              </div>
                            
                          </div>
                          <div className="col-md-6">
                                  <div className="safety-image " >
                                       <img height="auto" width="250" src="image1.webp"  alt="this is an image" />
                                  </div>
                            </div>

                    </div>
                    <div className="list-group" >
                          <div className="card1" >
                                  <img src="security.webp"  alt="this is an image" />
                                  <div className="text1" >
                                       <p>256-bit encryption </p>
                                       <p></p>
                                  </div>
                          </div>
                          <div className="card1" >
                                  <img src="iso.webp"  alt="this is an image" />
                                  <div className="text1" >
                                       <p>ISO 27001 certified</p>
                                  </div>
                          </div>
                          <div className="card1" >
                                  <img src="security_4.webp"  alt="this is an image" />
                                  <div className="text1" >
                                       <p>HIPAA compliant data centers</p>
                                       
                                  </div>
                          </div>
                          <div className="card1" >
                                  <img src="security_5.webp"  alt="this is an image" />
                                  <div className="text1" >
                                       <p>DSCI member</p>
                                       
                                  </div>
                          </div>
                    </div>
                 </main>
            </div>
        </React.Fragment>
     );
}
 
export default Safety;