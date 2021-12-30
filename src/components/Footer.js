import React from 'react';
import * as footerStyles from './Footer.module.css';

const Footer = () =>(
    <footer className={footerStyles.footer}>
        <div className="container">
            <span className='text-muted'>© Blog 2021</span>
        </div>
    </footer>
);

export default Footer;