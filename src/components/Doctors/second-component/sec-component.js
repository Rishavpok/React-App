import React from 'react';
import { Link } from 'react-router-dom';
import {Button } from 'react-bootstrap';
import './sec-component.css';
import Comment from '../../../common/comment/comment';

const SecondComponent = () => {
    return ( 
         <React.Fragment>
             <div className="second-component">
                 <main className='container'> 
                      <div className="row" >
                           <div className="col-md-6" >
                               <div className="gurannted" >
                                      <h4 className="header-h4" >
                                          Instant appointment with doctors.Guaranteed.
                                          </h4>
                               </div>
                               <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> 100,000 Verified doctors</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> 3M+ Patient recommendations</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> 25M Patients/year</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button className="button-safety" >
                                       Find me a right doctor
                                     </Button>
                                   </Link> 
                                 </div>
                                 <div className="cmt">
                                   <Comment />
                                 </div>
                           </div>
                           <div className="col-md-6" >
                                  <div className="video-holder" >
                                  
                                      <video className="rh5v-DefaultPlayer_video"
                                       poster="//www.practostatic.com/web-assets/home/assets/images/book.875ca26a3c4283c777660377e421e99b.png"
                                        width="250" height="480"
                                         loading="false" autoplay="true" loop="">
                                             <source src="//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" type="video/webm" />
                                     </video>
                                  </div>
                            </div>
                      </div>
                      <div className="list-groups">
                             <ul className="sec-list" >
                                <li>
                                    <img   width="100" src="fortune.png" alt="image" />
                                </li>
                                <li>
                                    <img   width="150" src="tech.png" alt="image" />
                                </li>
                                <li>
                                    <img   width="100" src="Forbes.svg" alt="image" />
                                </li>
                                <li>
                                    <img   width="180" src="wall.png" alt="image" />
                                </li>
                             </ul>
                      </div>
                 </main>

             </div>
         </React.Fragment>
     );
}
 
export default SecondComponent;

