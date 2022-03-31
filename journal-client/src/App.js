import "./App.scss";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WelcomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
