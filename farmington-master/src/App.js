import React from 'react';
import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';
import Contact from './components/contactComponent/contactUs';
import Relaible from './components/reliableComponent/reliable';
import Services from './components/servicesComponent/services';
import Home from './components/homeComponent.js/home';

import SignForm from './components/SignFormComponent/SignForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <Relaible></Relaible>
      {/* <SignForm></SignForm> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
