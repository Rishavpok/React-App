import React from 'react';
import './review.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Review = () => {
    return ( 
        <React.Fragment>
            <div className="review-section">
              <main className="container">
                       <div className="review">
                              <h3 className="review-title">
                              What our users have to say
                              </h3>
                       </div>
                       <div className="review-part">
                              <OwlCarousel
                               className="owl-theme"
                               items="1"
                               autoPlay={true}
                                autoplayHoverPause={true}
                               loop
                               dots
                              >
                                   <div className="review-text">
                                              <p>Beautiful app with elegant UI degign</p>
                                   </div>
                                   <div className="review-text">
                                              <p>Beautiful app with elegant UI degign</p>
                                   </div>
                                   <div className="review-text">
                                              <p>Beautiful app with elegant UI degign</p>
                                   </div>
                                   <div className="review-text">
                                              <p>Beautiful app with elegant UI degign</p>
                                   </div>
                              </OwlCarousel>
                       </div>
              </main> 
            </div>
        </React.Fragment>
     );
}
 
export default Review;