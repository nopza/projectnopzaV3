import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/Page.css'

class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="card">
                        <div className="grid">
                            <div className="row flex-align-center">
                                <div className="cell-3 ">
                                    <div className="inputd">
                                        <h3>Hospital Number : </h3>
                                    </div>
                                </div>
                                <div className="cell-3">
                                    <div>
                                        <input type="text" data-role="input" disabled className="mb-1" />
                                    </div>
                                </div>
                                <div className="cell-3 offset-2">
                                    <div className="imgPreview picimg">
                                        <img />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form data-role="validator" action="javascript:">
                        <div className="card">
                            <div className="card-header">
                                <h4>ข้อมูลทั่วไป</h4>
                            </div>
                            <div className="card-content p-5">
                                <div className="card p-5">
                                    <div className="row">
                                        <div className="cell">
                                            <label><h5>คำนำหน้า</h5></label>
                                            <select data-role="select" data-validate="required not=-1">
                                                <option value="-1" className="d-none"></option>
                                                <option value="1">นาย</option>
                                                <option value="2">นาง</option>
                                                <option value="3">นางสาว</option>
                                            </select>
                                            <span className="invalid_feedback">
                                                กรุณาเลือกคำนำหน้า!
                                        </span>
                                        </div>

                                        <div className="cell-3">
                                            <label><h5>ชื่อ</h5></label>
                                            <input type="text"
                                                data-validate="required"
                                            />
                                            <span class="invalid_feedback">
                                                กรุณากรอกชื่อ!
                                            </span>
                                        </div>

                                        <div className="cell-3">
                                            <label><h5>นามสกุล</h5></label>
                                            <input type="text"
                                                data-validate="required"
                                            />
                                            <span class="invalid_feedback">
                                                กรุณากรอกนามสกุล!
                                            </span>
                                        </div>

                                        <div className="cell-3">
                                            <label><h5>ชื่อกลาง</h5></label>
                                            <input type="text"
                                                data-validate="required"
                                            />
                                            <span class="invalid_feedback">
                                                กรุณากรอกชื่อกลาง!
                                            </span>
                                        </div>

                                        <div className="cell">
                                            <label><h5>ชื่อเล่น</h5></label>
                                            <input type="text"
                                                data-validate="required"
                                            />
                                            <span class="invalid_feedback">
                                                กรุณากรอกชื่อเล่น!
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <button className="button primary">Submit</button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Register;
