import React from 'react';
import './card-slider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const CardSlider = () => {
    return(
           <React.Fragment>
                <div className="card-holder" >
                    <main className="container">
                        <div className="holder-title" >
                              <h4 className="article" >
                              Read top articles from health experts
                              </h4>
                        </div>
                    <OwlCarousel
                    className="owl-theme"
                    items="3"
                    autoPlay
                    loop
                    margin={5}
                    >
                          
                        <div className="item" >
                          <div class="card">
                                <img class="card-img-top" src="https://www.practostatic.com/fit/d6303c41562a5643137da5bacc5c642ff32d11eb" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Skin trouble? Here is not what to do</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                 </div>
                         </div>
                         
                         </div>

                         <div className="item" >
                          <div class="card">
                                <img class="card-img-top" src="https://www.practostatic.com/fit/c716b3119781d2c1032ed4ea0b93845f84782fea" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Green tea.Its not as healthy as you think</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                 </div>
                         </div>
                         
                         </div>

                         <div className="item" >
                          <div class="card">
                                <img class="card-img-top" src="https://www.practostatic.com/fit/547070a87697a72094abe97777a58e4fb5657aeb" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">The Perfect routine</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                 </div>
                         </div>
                         
                         </div>


                         <div className="item" >
                          <div class="card">
                                <img class="card-img-top" src="https://www.practostatic.com/fit/1db4df689be839c280a396d304d380c219d5e9ea" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Benefits of eating egg</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                 </div>
                         </div>
                         
                         </div>
                    </OwlCarousel>
                    </main>
                 </div>
                          
            </React.Fragment>
        );
}
 
export default CardSlider;