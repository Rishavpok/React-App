import React from 'react';
import './comment.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Comment = () => {
    return ( 
        <React.Fragment>
            <div className="comment-section">
                   <main className="container">
                         <OwlCarousel
                          className="owl-theme"
                          items="1"
                          autoPlay
                          loop
                         >
                             <div className="item1">
                                   <p>
                                   hey good quality of product
                                   </p>
                                   <span> <i class="fa fa-user" aria-hidden="true"></i> Rishav Pokharel</span>
                             </div>
                             <div className="item1">
                                   <p>
                                       hey good quality of product
                                   </p>
                                   <span> <i class="fa fa-user" aria-hidden="true"></i> Rishav Pokharel</span>
                             </div>
                             <div className="item1">
                                   <p>
                                       hey good quality of product
                                   </p>
                                   <span> <i class="fa fa-user" aria-hidden="true"></i> Rishav Pokharel</span>
                             </div>
                         </OwlCarousel>
                   </main>
            </div>
        </React.Fragment>
     );
}
 
export default Comment;