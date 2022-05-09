import "./WelcomePage.scss";
import SiteLogin from "../../components/SiteLogin/SiteLogin";
import SiteLoginForm from "../../components/SiteLoginForm/SiteLoginForm";
import { Route, Switch } from "react-router-dom";

function WelcomePage(props) {
  document.title = "Film Journal";
  return (
    <>
      <section className="welcome">
        <div className="welcome__container-left"></div>
        <div className="welcome__container-right">
          <Switch>
            {/* <Route path={`${props.match.path}`} exact component={SiteLogin} /> */}
            <Route path="/" exact component={SiteLogin} />
            <Route path="/login" component={SiteLoginForm} />
          </Switch>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
