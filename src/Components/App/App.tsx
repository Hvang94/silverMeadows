import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import './App.css'
import Home from "../Home/Home";

function App() {


  return (
    <>
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

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        </Router>
    </>
  )
}

export default App
