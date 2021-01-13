import React from 'react';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Privacy from './components/privacy/privacy';
import Terms from './components/termsandcondition/terms';
import Doctor from './components/Doctors/doctors';
import Pharmacy from './components/pharmacy/pharmacy';

function App() {
  return (
<React.Fragment>
        <BrowserRouter>
        <NavBar />
        <Switch>
         <Route path="/privacy"  component={Privacy}/>
         <Route path="/terms"  component={Terms} />
         <Route path="/doctor"  component={Doctor} />
         <Route path="/pharmacy"  component={Pharmacy} />

        </Switch>
        <Footer />
        </BrowserRouter>
</React.Fragment> 
  );
}

export default App;
