import './App.css';
import {Home} from './components/Home'
import {GeoData} from './components/GeoData'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/:name"><GeoData /></Route>
    </Switch>
    </Router>

    </>
  );
}

export default App;
