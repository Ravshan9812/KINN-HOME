import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/Header/Header';
import Collection from './components/Collection/Collection';
import Essential from './components/Essential/Essential';
import Story from './components/Story/Story';
import Table from './components/Table/Table';
import SignUp from './components/Sign-up/Sign-up';
import Kinn from './components/Kinn/Kinn';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Collection />
      <Essential />
      <Story />
      <Table />
      <SignUp />
      <Kinn />
      <Footer />
    </div>
  )
}

export default App;