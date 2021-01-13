import React from 'react';
import './searchbox.css';


const SearchBox = () => {
    return ( 
        <>
          <div className="searchbox">
              <main className="container"> 
                      <div className="search py-5 " >
                          <h3 className="search-title" >Your home for health</h3>

                      </div>
                      <div className="find-book pb-10 ">
                             <h3 className="fb">Find and Book</h3>
                             {/* for input box */}
                        

                             <div className="input-group py-2 input-group-lg " >
                                <div className="input-group-prepend">
                                 <span className="input-group-text" id="">
                                 <i class="fa fa-map-marker" aria-hidden="true"></i>
                                 </span>
                                 </div>
                                 <input
                                  placeholder="Banglore"
                                  type="text"
                                   className="form-control  "/>

                                    <div className="input-group-prepend">
                                      <span className="input-group-text" id="">
                                      <i class="fa fa-search" aria-hidden="true"></i>
                                      </span>
                                    </div>  
                                
                                 <input
                                  type="text"
                                   placeholder="search doctors ,clinics,hospital etc"
                                  className="form-control"/>
                                </div>

                                <div className="search-by">
                                        <h6  >Popular Search:</h6>
                                      
                                                 <div className="list-search" >
                                                
                                                  <span className="list" >Dermatologist</span>
                                                  <span className="list" >Pedriaticain</span>
                                                  <span className="list" >Gynecologist</span>
                                                 </div>
                                                  
                                             
                                        
                                </div>
                      </div>
              </main>

          </div>
        </>
     );
}
 
export default SearchBox;