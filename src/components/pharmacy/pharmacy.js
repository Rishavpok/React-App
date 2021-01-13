import React from 'react';
import FirstSlider from './first-slider/first-slider';
import HealthProducts from './HealthProducts/health-products';
import ThirdPart from './third-part/third-part';
import Review from './review-section/review';
import FourthPat from './fouth-part/fourth-part';
import LastPart from "./last-part/last-part";
import SecNavbar from './sec-navbar/sec-navbar';
import PopUp from '../.././common/popup/popup';
import Comment from '../.././common/comment/comment';

const Pharmacy = () => {
    return ( 
        <React.Fragment>
            <SecNavbar />
            <FirstSlider />
            <HealthProducts />
            <ThirdPart />
            <Review />
            <FourthPat />
            <LastPart />
            <PopUp />
            
        </React.Fragment>
     );
}
 
export default Pharmacy;