import React from 'react'

/** here we are using a neat trick of creating a index.js in the components and containers folder.
 * this lets us import that into the index.js of the respective folders to her app.js in two lines of code
 */

import { Footer, Blog, Possibility, Feature, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

//importing the css file for the app.js
import './App.css';

const App = () => {
  return (
    <div className='App'>

      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>



    </div>
  )
}

export default App