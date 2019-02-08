import React, { Component } from 'react';
// import Header from './Component/Page/Elements/Header';
// import Footer from './Component/Page/Elements/Footer';
import Routing from './Component/Page/Route/route';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header/>
        <Footer/> */}
        <Routing/>
      </div>
    );
  }
}

export default App;
