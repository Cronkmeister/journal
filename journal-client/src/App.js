import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/gallery" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
