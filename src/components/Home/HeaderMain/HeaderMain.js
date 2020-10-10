import React from 'react';
import chair from '../../../images/chair.png'; 
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
             <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smail <br/> Starts Here</h1>
                <p className="text-secondary" id="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam deserunt sapiente, id sint esse necessitatibus quis exercitationem maxime ab fugiat?</p>
                <button className="btn apoinmentBtn">GET APPOINMENT</button>
             </div>
             <div className="col-md-6">
                 <img src={chair} alt="chair" className="img-fluid"/>
             </div>
        </main>
    );
};

export default HeaderMain;