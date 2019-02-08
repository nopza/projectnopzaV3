import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Footer from '../Page/Elements/Footer';
import Header from '../Page/Elements/Header';
class Home extends Component {
    render() {
      return (
        <div class="wrapper">
            <Header/>
            <Helmet>
                <meta charSet="utf-8" />
                <title> HIS | Home </title>
            </Helmet>
          <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                <h3>Home</h3>
                </div>
                <div className="card-body">
    
                </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;