import React from 'react';
import './last-compo.css';

const CountryList = () => {
    return ( 
        <React.Fragment>
            <div className="country-group" >
            <main className="container">
            <div className="country">
                       
                         <ul  className="country-list" >
                              <li>
                                  India
                              </li>
                              <li>
                                  Singapore
                              </li>
                              <li>
                                  Philines
                              </li>
                              <li>
                                  Brazil
                              </li>
                          </ul>
                         
                          
                    </div>
                    </main>

            </div>
           
        </React.Fragment>
     );
}
 
export default CountryList;