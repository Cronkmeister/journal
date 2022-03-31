import "./WelcomePage.scss";
import { Route, Link, Switch } from "react-router-dom";

function WelcomePage() {
  return (
    <>
      <section className="welcome">
        <div className="welcome__container-left"></div>
        <div className="welcome__container-right">
          {/* login form */}
          <form className="welcome__form">
            <h3 className="welcome__form-title">Enter details</h3>
            <label className="welcome__form-label">username</label>
            <input className="welcome__form-input"></input>
            <label className="welcome__form-label">password</label>
            <input className="welcome__form-input"></input>
            <button className="welcome__form-button" type="submit">
              Submit
            </button>
          </form>

          {/* welcome box 
          <div className="welcome__button-box">
            <h2 className="welcome__title">
              Welcome to <br></br>Journal
            </h2>
            <button className="welcome__button">Enter</button>
            <button className="welcome__button">Log in</button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
