import "./App.scss";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={WelcomePage} />
      </BrowserRouter>
    </>
  );
}

export default App;
