import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images } from '../../constants';
import './Header.css';



const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading  title="Chase the New Flavour"/>
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>The design looks great! 
As someone who is learning web dev something that would be really useful would be a video where we see you iterate on creating a design or reproducing it through css. If we can follow your train of thought and see the trial and error, it becomes a lot more relatable to the experience of building a website from scratch and trying to make it look good.
That being said this is still very useful and I'm going to steal some styling ideas without a doubt : </p>
      <button className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
