import React from 'react';
import WhyChoiceUs from '../WhyChoiceUse/WhyChoiceUs';
import MainTheme from '../MainTheme/MainTheme';
import SocialLink from '../SocialLink/SocialLink';
import ContactUs from '../ContactUs/ContactUs';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
       <Helmet>
        <title> inventory  || Home </title>
       </Helmet>
    <WhyChoiceUs></WhyChoiceUs>

    <MainTheme ></MainTheme>
    <ContactUs></ContactUs>
    <SocialLink></SocialLink>


        </div>
    );
};

export default Home;