import React from 'react';
import './fifth-compo.css';
import { Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const FifthCompo = () => {
    return ( 
        <React.Fragment>
            <div className="fifth-compo" >
            <main className="container">
                  <div className="row">
                       <div className="col-md-6">
                            <div className="app-image">
                                    <img class="image-app"  src="https://www.practostatic.com/web-assets/home/assets/images/record.bfc5241f9b15340a32c98eb360d1005a.svg"  alt="image" />
                            </div>
                       </div>
                       <div className="col-md-6">
                           <div className="secure-app" >
                            <div className="app-text">
                                     <h4 className="app-h4" >
                                     All your medical records
                                     In one secure app.
                                     </h4>

                            </div>
                            <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> 256-bit end to end encryption</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Records are accessible only by you</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Access your records across 8000+ centers</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button  className="button-safety" >
                                      Find Out more
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
 
export default FifthCompo;