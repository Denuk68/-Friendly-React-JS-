import {React, Fragment} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// Base css
import './index.css' ;

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';






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