import {React, Fragment} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import $ from 'jquery';

// Base css
import './index.css' ;

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


// Header burger
$(document).ready(function(){
  $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});



function App() {
  
  return (
    <Fragment>
      <Router>
        <Header />

          <Switch>
          <Route
            path="/"
            exact
            render = {() => (
              <About />
            )}      
          />
          </Switch>

        <Footer />
      </Router>      
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));