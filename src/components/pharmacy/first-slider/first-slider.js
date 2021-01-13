import React from 'react';
import './first-slider.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


const FirstSlider = () => {
    return ( 
        <React.Fragment>
           
           <div className="first-slider">
           <main className="container">
                <OwlCarousel 
                 className="owl-theme"
                 items="1"
                 autoPlay={true}
                  autoplayHoverPause={true}
                 loop
                 dots={false}
                 

                >    
                   
                    
                    <div className="first-slider-images">
                             <img  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png" alt="slider-image" />
                    </div>
                    <div className="first-slider-images">
                             <img  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png" alt="slider-image" />
                    </div>
                    <div className="first-slider-images">
                             <img  src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png" alt="slider-image" />
                    </div>
                   
                   
                </OwlCarousel>
                </main>
                 </div>
                
               
               
            
        </React.Fragment>
     );
}
 
export default FirstSlider;