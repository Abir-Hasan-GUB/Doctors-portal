import React from 'react';
import './Blog.css';
import people1 from '../../../images/People1.png';
import people2 from '../../../images/People2.png';
import people3 from '../../../images/People3.png';

const Blog = () => {
    return (
        <div className="container">
            <div className="text-center sarviceResponsive blogText">
                <h5 style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h2>From Our Blog News</h2>
            </div>

            <div className="blogNews">
                <div class="card-deck blogCards">
                    <div class="card">

                        <div class="card-body">
                            <div className="cardFooter d-flex align-items-center">
                                <div className="CardFooterImg">
                                    <img src={people1} alt="" />
                                </div>
                                <div className="cardFooterInfo">
                                    <h6 className="pt-5" style={{ color: 'rgb(28, 199, 193)' }}>Winson Herry</h6>
                                    <p className="text-secondary">23 April 2019</p>
                                </div>
                            </div>
                            <h5 className="mt-3 mb-3">The tooth cancer is taking achallenge</h5>
                            <p class="card-text text-secondary">IIt is a long established fact that
                            by the readable content of a lot
    layout. The point </p>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body">
                            <div className="cardFooter d-flex align-items-center">
                                <div className="CardFooterImg">
                                    <img src={people2} alt="" />
                                </div>
                                <div className="cardFooterInfo">
                                    <h6 className="pt-5" style={{ color: 'rgb(28, 199, 193)' }}>Winson Herry</h6>
                                    <p className="text-secondary">23 April 2019</p>
                                </div>
                            </div>
                            <h5 className="mt-3 mb-3">The tooth cancer is taking achallenge</h5>
                            <p class="card-text text-secondary">IIt is a long established fact that
                            by the readable content of a lot
                            layout. The point </p>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body">
                            <div className="cardFooter d-flex align-items-center">
                                <div className="CardFooterImg">
                                    <img src={people3} alt="" />
                                </div>
                                <div className="cardFooterInfo">
                                    <h6 className="pt-5" style={{ color: 'rgb(28, 199, 193)' }}>Winson Herry</h6>
                                    <p className="text-secondary">23 April 2019</p>
                                </div>
                            </div>
                            <h5 className="mt-3 mb-3">The tooth cancer is taking achallenge</h5>
                            <p class="card-text text-secondary">IIt is a long established fact that
                            by the readable content of a lot
                            layout. The point </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;