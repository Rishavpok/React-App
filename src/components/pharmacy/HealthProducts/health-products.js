import React from 'react';
import './health-product.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


const HealthProducts = () => {
    return ( 
              <React.Fragment>
                  <main className="container">
                      <div className="health-condition">
                            <div className="main-title" >
                            <h4 className="main-text" >
                              Browse medicines & health products

                              </h4>
                            </div>
                              
                          <div className="product-title" >
                              <h5 className="product-text">
                                  Health Condition
                              </h5>
                          </div>
                          
                          <div className="product-view-list" >
                               <OwlCarousel
                                   className="owl-theme"
                                   items="4"
                                   autoPlay
                                   loop
                                   dots={false}
                                   margin={10}
                               >
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png" />
                                   </div>
                               </OwlCarousel>
                          </div>

                          {/* for catagories */}
                          <div className="product-title" >
                              <h5 className="product-text">
                              Categories
                              </h5>
                          </div>
                          
                          <div className="product-view-list" >
                               <OwlCarousel
                                   className="owl-theme"
                                   items="4"
                                   autoPlay
                                   loop
                                   dots={false}
                                   margin={10}
                               >
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png" />
                                   </div>
                                   <div  className="product-items">
                                       <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png" />
                                   </div>
                               </OwlCarousel>
                          </div>

                          {/* for popular products */}
                           
                          <div className="product-title" >
                              <h5 className="product-text">
                              Popular Products
                              </h5>
                          </div>
                          
                          <div className="product-view-list" >
                               <OwlCarousel
                                   className="owl-theme"
                                   items="4"
                                   autoPlay
                                   loop
                                   dots={false}
                                   margin={10}
                               >
                                   <div  className="product-items">
                                     <div className="image-container">
                                        <img className="product-image" src="https://www.practostatic.com/practopedia-v2-images/res-150/350a99b69c638b4d0fd6498011626dfc3e686e6d1.JPG" />
                                     </div>
                                     
                                     <div className="details-area">
                                             <h6 className="products-name" >
                                                 KOJIVIT ULTRA GEL 30gm
                                             </h6>
                                     </div>
                                       
                                   </div>
                                   <div  className="product-items">
                                     <div className="image-container">
                                        <img className="product-image" src="https://www.practostatic.com/practopedia-v2-images/res-150/82a76f0c1541a288d5589e6f929e52a8230888f31.JPG" />
                                     </div>
                                     
                                     <div className="details-area">
                                             <h6 className="products-name" >
                                                 ANTOCID HC Capsule
                                             </h6>
                                     </div>
                                       
                                   </div>
                                   <div  className="product-items">
                                     <div className="image-container">
                                        <img className="product-image" src="https://www.practostatic.com/practopedia-v2-images/res-150/2ff9f3aa807029d7fe8e27ef2b74357e1e7c409a1.jpg" />
                                     </div>
                                     
                                     <div className="details-area">
                                             <h6 className="products-name" >
                                                 KERABOOST Tablet
                                             </h6>
                                     </div>
                                       
                                   </div>
                                   <div  className="product-items">
                                     <div className="image-container">
                                        <img className="product-image" src="https://www.practostatic.com/practopedia-v2-images/res-150/54822146e82e046517547cd64a98d12563f0a7641.JPG" />
                                     </div>
                                     
                                     <div className="details-area">
                                             <h6 className="products-name" >
                                                PREGA NEWS Tablet
                                             </h6>
                                     </div>
                                       
                                   </div>
                                  
                               </OwlCarousel>
                          </div>



                      </div>
                      <hr />

                      {/* for third part */}
                     
                         
                  </main>
              </React.Fragment>
     );
}
 
export default HealthProducts;