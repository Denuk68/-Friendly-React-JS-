import React from 'react'
import './About.css'

export default function About() {
    return (
        <>
        <section className="hero">
        <div className="container">
            <div className="hero__row">
                <div className="hero__body">
                    <h1>Friendly App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
                        integer.</p>
                    <button className="btn__get">Get started</button>
                </div>
                <div className="hero__image">
                    <img src="img/about/hero.png" alt="" />
                </div>
            </div>
        </div>
        </section>

        <section className="block1">
        <div className="container">
            <div className="block1__row">
                <div className="block1__top">
                    <h2>Our approach to reach your business goals</h2>
                </div>
                <div className="block1__bottom">
                    <div className="block1__item">
                        <img src="img/about/item1.png" alt=""/>
                        <h3>Ideate</h3>
                        <p>Turn your idea from concept to MVP</p>
                    </div>
                    <div className="block1__item">
                        <img src="img/about/item2.png" alt=""/>
                        <h3>Design</h3>
                        <p>Sketch out the product to align the user needs</p>
                    </div>
                    <div className="block1__item">
                        <img src="img/about/item3.png" alt=""/>
                        <h3>Develop</h3>
                        <p>Convert the designs into a live application</p>
                    </div>
                    <div className="block1__item">
                        <img src="img/about/item4.png" alt=""/>
                        <h3>Deploy</h3>
                        <p>Launching the application to the market</p>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="block2">
        <div className="container">
            <div className="block2__row">
                <div className="block2__top">
                    <h2>All app screens</h2>
                </div>
                <div className="block2__bottom owl-carousel owl-theme">
                    <div><img src="img/about/screen.png" alt=""/></div>
                    <div><img src="img/about/screen.png" alt=""/></div>
                    <div><img src="img/about/screen.png" alt=""/></div>
                    <div><img src="img/about/screen.png" alt=""/></div>
                </div>
            </div>
        </div>
        </section>


        <section className="contact">
        <div className="container">
            <div className="contact__row">
                <div className="contact__image">
                    <img src="img/about/Creative.png" alt=""/>
                </div>
                <div className="contact__body">
                    <h2>Contact Form</h2>
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Number"/>
                        <input type="text" placeholder="Email"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
