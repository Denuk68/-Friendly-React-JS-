import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__top">
                        <div className="footer__list">
                            <ul>
                                <li><Link to="">Company</Link></li>
                                <li><Link to="">About Us</Link></li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Contact US</Link></li>
                            </ul>
                        </div>
                        <div className="footer__list">
                            <ul>
                                <li>Support</li>
                                <li><Link to="">Help Center</Link></li>
                                <li><Link to="">Safety Center</Link></li>
                                <li><Link to="">Community Guidelines</Link></li>
                            </ul>
                        </div>
                        <div className="footer__list">
                            <ul>
                                <li>Legal</li>
                                <li><Link to="">Cookies Policy</Link></li>
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Terms of Service</Link></li>
                                <li><Link to="">Law Enforcement</Link></li>
                            </ul>
                        </div>
                        <div className="footer__list">
                            <ul>
                                <li className="li__app">Install App</li>
                                <li><Link to=""><img src="img/footer/Google Play Badge.png" alt="" /></Link></li>
                                <li><Link to=""><img src="img/footer/App Store Badge.png" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__left">
                            <p>© 2020 Friendly All rights reserved</p>
                        </div>
                        <div className="footer__right">
                            <div><img src="img/footer/Instagram.png" alt="" /></div>
                            <div><img src="img/footer/Dribbble.png" alt="" /></div>
                            <div><img src="img/footer/Twitter.png" alt="" /></div>
                            <div><img src="img/footer/Youtube.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


