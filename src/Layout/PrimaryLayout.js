import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrimaryLayout = ({ children, col }) => (
    <div>
        <SEO />
        <Header />
        <main>
            <div className="container">
                <div className="p-5">
                    <div className="row justify-content-md-center">
                        <div className={col}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);
export default PrimaryLayout;