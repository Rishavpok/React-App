import React from 'react';
import Safety from './Safety/Safety';
import SecondComponent from './second-component/sec-component';
import ThirdCompo from './third-component/third-component';
import CardSlider from './card-slider/card-slider';
import FourthCompo from './fouth-compo/fourth-compo';
import FifthCompo from './fifth-compo/fifth-compo';
import SixthCompo from './sixth-compo/sixth-compo';
import SevenCompo from './seven-compo/seven-compo';
import CountryList from './last-compo/last-compo';
import SearchBox from './Searchbox/searchbox';
import './doctors.css';

const Doctor = () => {
    return ( 
        <React.Fragment>
          <SearchBox />
          <Safety/>
          <SecondComponent />
          <ThirdCompo/>
          <CardSlider/>
          <FourthCompo />
          <FifthCompo />
          <SixthCompo />
          <SevenCompo />
          <CountryList />
        </React.Fragment>
     );
}
 
export default Doctor;