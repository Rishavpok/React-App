import React from 'react';
import './third-part.css';
import { Link} from 'react-router-dom';

const ThirdPart = () => {
    return ( 
        <React.Fragment>
            <div className="third-part">
            <main className="container">
                 <div className="row">
                      <div className="col-md-6">
                          <div className="link-tag-text" >
                         
                          <h6 className="link-tag">
                          <Link style={{textDecoration:"none"}} to="/" >
                            Introducing Consulation desk
                            </Link> 
                             </h6>
                         
                          </div>
                             
                             <div className="text" >
                                 <h5 className="text-h5" >
                                     Don't self medicate.
                                     Talk to an expert.Consult a doctor in
                                      less than 2 minutes
                                 </h5>
                            </div>  
                            <div className="third-part-image">
                                  <Link>
                                     <img className="first-image" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-1.d328c6a9.png"  />
                                  </Link>
                                     
                            </div>
                      </div>
                      <div className="col-md-6">
                      <div className="link-tag-text" >
                         
                            <h6 className="link-tag">
                                <Link style={{textDecoration:"none"}}  to="/" >
                            Introducing Fast Delivery
                            </Link>
                            </h6>
                         
                          
                          </div>
                             
                             <div className="text" >
                                 <h5 className="text-h5" >
                                     Tired of being waiting in the queue?
                                     Too weak to go down and buy medicine?
                                 </h5>
                            </div>  
                            <div className="third-part-image">
                                <Link>
                                <img className="first-image" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-2.1380f875.png"  />
                                </Link>
                                     
                            </div>
                      </div>
                 </div>
            </main>

            </div>

            <div className="info">
                 <main className="container">
                          <div className="info-image">
                               <img width="100%" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png"  />
                          </div>
                 </main>
            </div>
            
        </React.Fragment>
     );
}
 
export default ThirdPart;


