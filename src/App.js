
import './App.css';
import Login from "./pages";
import News from "./pages/News";

import { BrowserRouter as Router,Route,Switch,Link,Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/news" component={ News } />
      </Switch>
    </Router>
  );
}

export default App;
