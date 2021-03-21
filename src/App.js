import "./App.css";
import "firebase/auth";
import "firebase/firestore";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <div className="container">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
