import "./App.scss";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Switch>
          <Route path="/" component={WelcomePage} />
        </Switch> */}
        <NavBar />
        <Gallery />
      </BrowserRouter>
    </>
  );
}

export default App;
