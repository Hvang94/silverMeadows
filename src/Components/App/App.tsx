import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import './App.css'
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../Services/Services"
import ContactUs from "../ContactUs/ContactUs"

function App() {


  return (
    <>
    <Header />
    <Router>
      <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />
          <Route
            exact
            path="/home"
          >
            <Home />
          </Route>

          <Route exact path="/services">
<Services />
          </Route>

          <Route exact path="/contact-us">
<ContactUs />
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        </Router>
        <Footer />
    </>
  )
}

export default App
