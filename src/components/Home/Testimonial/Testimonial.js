import React from 'react';
import './Testimonial.css';
import people1 from '../../../images/People1.png';
import people2 from '../../../images/People2.png';
import people3 from '../../../images/People3.png';

const Testimonial = () => {
    return (
        <div className="container">
            <div className="testimonialTop">
                <h5 className="pt-5" style={{ color: 'rgb(28, 199, 193)' }}>APPOINMENT</h5>
                <h1 style={{ color: 'rgb(58, 66, 86' }}>What’s Our Patients <br />Says</h1>
            </div>
            <div className="testimonialBottom">
                <div class="card-deck">
                    <div class="card">

                        <div class="card-body">

                            <p class="card-text">It is a long established fact that
                            by the readable content of a lot
                            layout. The point of using Lorem
                            a more-or-less normal distribu
                            to using ‘Content here, content</p>
                            <div className="cardFooter d-flex align-items-center">
                                <div className="CardFooterImg">
                                        <img src={people1} alt=""/>
                                </div>
                                <div className="cardFooterInfo">
                                <h6  className="pt-5" style={{color: 'rgb(28, 199, 193)'}}>Winson Herry</h6>
                                <p>California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body">

                            <p class="card-text">It is a long established fact that
                            by the readable content of a lot
                            layout. The point of using Lorem
                            a more-or-less normal distribu
                            to using ‘Content here, content</p>
                              <div className="cardFooter d-flex align-items-center">
                                  <div className="CardFooterImg">
                                      <img src={people2} alt=""/>
                                  </div>
                                  <div className="cardFooterInfo">
                                  <h6  className="pt-5" style={{color: 'rgb(28, 199, 193)'}}>Winson Herry</h6>
                                  <p>California</p>
                                  </div>
                              </div>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body">

                            <p class="card-text">It is a long established fact that
                            by the readable content of a lot
                            layout. The point of using Lorem
                            a more-or-less normal distribu
                            to using ‘Content here, content</p>
                              <div className="cardFooter d-flex align-items-center">
                                  <div className="CardFooterImg">
                                      <img src={people3} alt=""/>
                                  </div>
                                  <div className="cardFooterInfo">
                                      <h6  className="pt-5" style={{color: 'rgb(28, 199, 193)'}}>Winson Herry</h6>
                                        <p>California</p>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;