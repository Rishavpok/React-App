import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
const Footer = () => {
    return ( 
        <React.Fragment>
            <div className="main-footer" >
                <main className="container" >
                 <div className="footer" >
                <div className="row" >
                     <div className="col-lg-2 col-md-4 " >
                         <div className="pactro" >
                              <h5 className="headline" >Pactro</h5>
                              <ul className="footer-list" >
                                  <Link><li  >About</li></Link>
                                  <Link><li>Blogs</li></Link>
                                  <Link><li>Careers</li></Link>
                                  <Link><li>Press</li></Link>
                                  <Link><li>Contact Us</li></Link>
                              </ul>
                         </div>
                     </div>
                     <div className="col-lg-2 col-md-4" >
                         <div className="pactro" >
                              < h5 className="headline" >For Patients</h5>
                              <ul className="footer-list"> 
                                  <Link><li>Search for doctors</li></Link>
                                  <Link><li>Search for hospital</li></Link>
                                  <Link><li>Search for Clinic</li></Link>
                                  <Link><li>Book Daigonstic Test</li></Link>
                                  <Link><li>Book full body checkup</li></Link>
                                  <Link><li>Pactro plus</li></Link>
                                  <Link><li>Read Health article</li></Link>
                              </ul>
                         </div>
                     </div>
                     <div className="col-lg-2 col-md-4" >
                         <div className="pactro" >
                              <h5 className="headline" >For doctors</h5>
                              <ul className="footer-list" >
                                   <Link><li>Pactro Profile</li></Link>
                                  
                                 
                              </ul>
                         </div>
                     </div>
                     <div className="col-lg-2 col-md-4" >
                         <div className="pactro" >
                              <h5 className="headline" >For Hospital</h5>
                              <ul className="footer-list" >
                                   <Link><li>Insta by pactro</li></Link>
                                   <Link><li>pactro profile</li></Link>
                                   <Link><li>Pactro Reach</li></Link>
                                   <Link><li>Practo Drive</li></Link>
                               </ul>
                         </div>
                     </div>
                     <div className="col-lg-2 col-md-4" >
                         <div className="pactro" >
                              <h5 className="headline" >More</h5>
                              <ul className="footer-list" > 
                                  <Link><li>Help</li></Link>
                                  <Link><li>Developers</li></Link>
                                  <Link to="/privacy"><li>Privacy Policy</li></Link>
                                  <Link to="/terms"> <li>Terms & Condition</li></Link>
                                  <Link><li>Healt care directory</li></Link>
                                  
                                  
                                  
                                 
                                  
                              </ul>
                         </div>
                     </div>
                     <div className="col-lg-2 col-md-4" >
                         <div className="pactro" >
                              <h5 className="headline" >Social</h5>
                              <ul className="footer-list" >
                                   <Link> <li>Facebook</li></Link>
                                   <Link><li>Twitter</li></Link>
                                   <Link><li>LinkedIn</li></Link>
                                   <Link>  <li>Youtube</li></Link>
                                   <Link><li>Github</li></Link>
                              </ul>
                         </div>
                     </div>
                 </div>
                 </div>
            </main>

              <center>
                  <div className="second-footer" >
                  <img  width="200" src="logo.png" />
                  </div>
                  
              </center>
                
            </div>
        </React.Fragment>
     );
}
 
export default Footer;