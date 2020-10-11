import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const facebook = <FontAwesomeIcon icon={faFacebookF} />
const google = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faGooglePlusG} />

const Footer = () => {
    return (
        <div className = "container footerDiv">
            <div className="row">
                <div className="col-md-3 one">
                <ul className = "footerList">
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Diseases</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                </ul>
                </div>
                <div className="col-md-3 two ">
                <h5 className="footerTitle">Services</h5>
                <ul className = "footerList">
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Diseases</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Check Up</li>
                    <li>Check Up</li>
                </ul>
                </div>
                <div className="col-md-3 three">
                <h5 className="footerTitle">Oral Health</h5>
                <ul className = "footerList">
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Diseases</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Check Up</li>
                    <li>Check Up</li>
                </ul>
                </div>
                <div className="col-md-3 four">
                <h5 className="footerTitle">Our Address</h5>
                <ul className = "footerList">
                    <li>New York - 101010 Hudson Yards</li>
                </ul>
                <div className="icons">
                    <ul>
                        <li>{facebook}</li>
                        <li>{google}</li>
                        <li>{twitter}</li>
                    </ul>
                </div>
                <div className="callNow">
                    <h6  className = "text-secondary">Call Now</h6>
                    <p>+2025550295</p>
                </div>
                </div>
                <div className="copyright">
                <p> © Copyright {new Date().getFullYear()} All Rights Reserved by "Abir Hasan"</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;