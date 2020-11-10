import {React} from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (     
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__logo">
                        <Link to="">
                            <img src="img/header/logo.png" alt="Logo"/>
                        </Link>
                        <p>Friendly</p>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li>
                                <Link to="" className="header__link">About</Link>
                            </li>
                            <li>
                                <Link to="" className="header__link">Product</Link>
                            </li>
                            <li>
                                <Link to="" className="header__link">Pricing</Link>
                            </li>
                            <li>
                                <Link to="" className="header__link">Resources</Link>
                            </li>
                            <li>
                                <Link to="" className="header__link">Jobs</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <button className="btn__login">Login</button>
                        <button className="btn__sign">Sign up</button>
                    </div>
                    <div className="header__burger">
                        <span></span>                                
                    </div>
                </div>
            </div>
        </header>        
    )
}
