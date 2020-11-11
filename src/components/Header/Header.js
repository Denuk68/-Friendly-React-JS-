import {React} from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import $ from 'jquery';




export default function Header() {

    // Header burger
    $(document).ready(function(){
        $('.header__burger').click(function(event){
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
        $('.header__link').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        });
    });
  
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
                                <NavLink to="/" className="header__link" activeStyle={{color: '#9b44ff'}} exact>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product" className="header__link" activeStyle={{color: '#9b44ff'}} exact>Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="header__link" activeStyle={{color: '#9b44ff'}} exact>Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/resources" className="header__link" activeStyle={{color: '#9b44ff'}} exact>Resources</NavLink>
                            </li>
                            <li>
                                <NavLink to="/jobs" className="header__link" activeStyle={{color: '#9b44ff'}} exact>Jobs</NavLink>
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
