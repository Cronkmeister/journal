import { Link } from "react-router-dom";
import logo from "../../assests/logo/logo.png";

function SiteLogin() {
  return (
    <>
      <div className="welcome__button-box">
        <h2 className="welcome__title">
          Welcome to <br></br>Journal
        </h2>
        <Link to="/gallery" className="welcome__button">
          Enter
        </Link>
        <Link to="/login" className="welcome__button">
          Log in
        </Link>
      </div>
    </>
  );
}

export default SiteLogin;
