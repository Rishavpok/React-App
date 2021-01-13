import React from 'react';
import './fourth-compo.css';
import { Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';


const FourthCompo = () => {
    return ( 
        <React.Fragment>
            <div className="fouth-compo">
                <main className="container">
                       <div className="row">
                           <div className="col-md-6">
                                 <div className="medicine">
                                     <h4 className="med-header">  
                                     Get all your medicines.
                                     Everytime. On time.
                                     </h4>
                                 </div>
                                 <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Guaranteed availability</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Over 130,000+ genuine medicines</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Home delivery in 24hrs</li>
                                       </ul>
                                 </div>
                                 <div className="safety-button" >
                                   <Link to="/" >
                                    <Button  className="button-safety" >
                                      Order Medicine
                                     </Button>
                                   </Link> 
                                 </div>
                           </div>
                           <div className="col-md-6">
                                   <div className="box-holder" >
                                         <img   className="box-image" src="https://www.practostatic.com/web-assets/home/assets/images/order.c84fc07b0be8a7e8d4db432eb4e606a2.svg"  alt="image" />
                                   </div>
                           </div>

                       </div>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default FourthCompo;