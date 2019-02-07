import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav data-role="ribbonmenu">
          <ul className="tabs-holder">
            <li className="static"><a href="#">Static</a></li>
            <li><a href="#section-1-1">Home</a></li>
            <li><a href="#">Master</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">Reports</a></li>
          </ul>

          <div className="content-holder">
            <div className="section" id="section-1-1">
              <div className="group">
                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">ลงทะเบียนผู้ป่วย</span>
                </button>

                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">ส่งตรวจผู้ป่วย</span>
                </button>

                <span className="title">เวชระเบียน</span>
              </div>

              <div className="group">
                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">งานหน้าห้องตรวจ</span>
                </button>

                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">ห้องตรวจแพทย์</span>
                </button>

                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">งานห้องจ่ายยา</span>
                </button>

                <span className="title">OPD</span>
              </div>
              <div className="group">
                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">งานหน้าห้อง X-ray</span>
                </button>

                <span className="title">X-ray</span>
              </div>

              <div className="group">
                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">งานห้องการเงิน</span>
                </button>

                <span className="title">Finance</span>
              </div>

              <div className="group">
                <button className="ribbon-button">
                  <span className="icon">
                    <img src="images/share.svg" />
                  </span>
                  <span className="caption">Manage Session</span>
                </button>

                <span className="title">Appointment</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
