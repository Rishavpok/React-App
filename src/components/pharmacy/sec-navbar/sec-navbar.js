import React from 'react';
import './sec-navbar.css';

const SecNavbar = () => {
    return (  
        <React.Fragment>
            <div className="secnav">
                  <main className="container" >
                      <div className="row">
                        <div className="col-md-6" > 
                        <div className="search-bar" >
                       
                        <div className="input-group mb-3">
                        
                        
                        <input type="text"
                         className="form-control" 
                         placeholder="Search for medicine,health product and more!!"
                         aria-label="Username"
                         aria-describedby="basic-addon1"
                         />
                         </div>

                        </div>
                         
                          </div>
                          <div className="col-md-6">
                              <div className="view-cart">

                              <button 
                              style={{paddingLeft:10 ,paddingRight:10 , width:200 }}
                              type="button" 
                               class="btn btn-primary btn-lg ">View Cart</button>

                              </div>
                         
                          </div>

                      </div>
                 
                  </main>
            </div>
        </React.Fragment>
    );
}
 
export default SecNavbar;