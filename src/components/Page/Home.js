import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
            HOME
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
