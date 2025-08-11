import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Welcome from './Pages/Welcome';
import ErrorPage from './Pages/ErrorPage';
import AboutCardDefender from './components/footer/Aboutcarddefender/AboutCardDefender';
import OurMission from './components/footer/ourmission/OurMission';
import Team from './components/footer/team/Team';
import Careers from './components/footer/careers/Careers';
import NewsPress from './components/footer/newpress/NewsPress';
import ContactSupport from './components/footer/contactlayout/ContactSupport';
import Documentation from './components/footer/documentation/Documentation';
import FAQs from './components/footer/faqs/FAQs';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* ✅ Routes with Rootlayout */}
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>

        {/*  404 route without Rootlayout */}
        <Route path="/aboutdefender" element={<AboutCardDefender />} />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<NewsPress />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/knowledge-base" element={<Documentation />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
