import React from 'react';
import './fourth-part.css';

const FourthPart = () => {
    return ( 
        <React.Fragment>
            <div className="fourth-part">
                  <main className="container">
                      <div className="row">
                           <div className="col-md-6">
                                 <div className="fourth-image">
                                       <img className="download-image" src="https://www.practostatic.com/consumer-home/desktop/images/1540464906/app-banner@2x.jpg" />
                                 </div>
                           </div>
                           <div className="col-md-6">
                                 <div className="fourth-container">
                                     <h4 className="fourth-text">
                                     Download the Practo app
                                     </h4>
                                     <span>Your home for health is one tap away.</span>
                                     <div className="appointment">
                                          <p>Book appointments, Order health products, Consult with a doctor online,
                                             Book health chekups, store health records & read health tips
                                          .</p>

                                     </div>  
                                     <div className="send-app-link">
                                         <p>Send the link to download the app</p>
                                         <div className="input-group input-group-lg">
                                            <input type="text" class="form-control" 
                                            placeholder="Enter Your Number" 
                                            aria-label="Recipient's username" 
                                            aria-describedby="basic-addon2"/>
                                             <div className="input-group-append">
                                              <button
                                               className="btn"
                                                type="button">Send App Link</button>
                                             </div>
                                            </div>
                                    </div>              
                                 </div>
                          </div>
                      </div>
                  </main>
            </div>
        </React.Fragment>
     );
}
 
export default FourthPart;