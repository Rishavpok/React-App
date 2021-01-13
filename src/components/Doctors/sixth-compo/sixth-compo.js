import React from 'react';
import './sixth-compo.css';
import { Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
const SixthCompo = () => {
    return ( 
        <React.Fragment>
            <div className="sixth-compo">
                 <main className="container">
                     <div className="row" >

                     
                     <div className="col-md-6" >
                          <div className="healthcare">
                              <div className="health-header">
                                    <h4 className="health-h4">  
                                    Leading Healthcare Providers.
                                    Trust us for Business
                                    </h4>
                              </div>
                              <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Get seen by 25M+ patients on Practo.com</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> The most advanced software for clinics and hospitals</li>
                                           <li className="safety-lists" ><i class="fa fa-check" aria-hidden="true"></i> State of the art business analytics for enterprises</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button  className="button-safety" >
                                      Learn more
                                     </Button>
                                   </Link> 
                                 </div>
                          </div>
                     </div>
                     <div className="col-md-6">
                         <div className="med-image">
                               <img className="image-meds" src="https://www.practostatic.com/web-assets/home/assets/images/provider.c4a3d938da109434de6ce3a9046bbf42.png" alt="image"  />
                         </div>
                     </div>
                     </div>
                 </main>
                 
            </div>
        </React.Fragment>
     );
}
 
export default SixthCompo;