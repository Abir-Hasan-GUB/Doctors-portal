import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div id="contacts" className="container contacts">
             <div className="text-center blogText">
                <h5 style={{ color: '#1CC7C1' }}>Contact US</h5>
                <h2 className="text-white">Always Connect with us </h2>
            </div>
            <div className="contactsFrom">
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email Here *" required/>
                    <input type="text" name="subject" id="subject" placeholder="Subject *" required/>
                    <textarea name="message" id="" cols="10" placeholder="Your Message" rows="5"></textarea>
                     <input type="submit" value="SUBMIT" id = "submitBtn"/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;