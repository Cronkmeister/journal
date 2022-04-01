import "./App.scss";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Gallery from "./pages/Gallery/Gallery";
import AddNew from "./pages/AddNew/AddNew";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Switch>
          <Route path="/" component={WelcomePage} />
        </Switch> */}
        <NavBar />
        {/* <Gallery /> */}
        <AddNew />
      </BrowserRouter>
    </>
  );
}

export default App;
