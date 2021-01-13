import React, { Children } from 'react';
import './third-component.css';
import {Link } from 'react-router-dom';
import {Button } from 'react-bootstrap';

const ThirdCompo = () => {
    return ( 
        <React.Fragment>
            <div className="third-compo" >
                   <main className="container">
                       <div className="row">
                            <div className="col-md-6" >
                                <div className="third-video" >
                                     <video className="rh5v-DefaultPlayer_video" 
                                    poster="//www.practostatic.com/web-assets/home/assets/images/consult.15f1b416f3f4c9383b780757d7293d00.png"
                                     width="250" height="480" loading="false" autoplay="" loop="">
                                         <source src="//www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
                                 type="video/webm" />

                                 </video>
                                
                                 </div>
                               

                            </div>
                            <div className="col-md-6" >
                                 <div className="third-div">
                                        <h3 className="h3-header" >
                                        Skip the waiting room.
                                        Chat with the doctors
                                        </h3>
                                        <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Fees starting at ₹99</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Verified doctors respond in 5 minutes</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> 100% Private and confidential</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button className="button-safety" >
                                       Chat Now
                                     </Button>
                                   </Link> 
                                 </div>
                                 </div>
                            </div>
                       </div>
                   </main>
            </div>
        </React.Fragment>
     );
}
 
export default ThirdCompo;