import React from 'react';
import './seven-compo.css';

const SevenCompo = () => {
    return ( 
        <React.Fragment>
            <div className="seven-compo">
                   <main className="container">
                        <div className="row">
                             <div className="col-md-6" >
                                   <div className="practo-app" >
                                        <img  className="practo-app-image"  src="https://www.practostatic.com/web-assets/home/assets/images/download.a9fb5307ceed47df0af1f39cf4e95519.png"  alt="image" />
                                   </div>
                             </div>
                             <div className="col-md-6" >
                                    <div className="download">
                                            <h4 className="down-h4" >
                                            Download the Practo app
                                            </h4> 
                                            <div className="safety-list" >
                                       <ul >
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Book appointments and lab tests</li>
                                           <li className="safety-lists" ><i class="fa fa-check" aria-hidden="true"></i> Order medicines</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Consult doctors online</li>
                                           <li className="safety-lists" > <i class="fa fa-check" aria-hidden="true"></i> Set medicine reminders</li>
                                       </ul>
                                 </div> 
                                    </div>
                             </div> 
                        </div>
                   </main>
            </div>
        </React.Fragment>
     );
}
 
export default SevenCompo;