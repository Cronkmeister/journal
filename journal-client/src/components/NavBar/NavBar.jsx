import "./NarBar.scss";
import logo from "../../assests/logo/logo1.svg";

function NavBar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__container">
            <div className="navbar__logo-container">
              <h2 className="navbar__logo">Journal</h2>
              {/* <img className="navbar__logo-image" src={logo}></img> */}
            </div>
            <ul className="navbar__links">
              <li className="navbar__link-item">gallery</li>
              <li className="navbar__link-item">map</li>
              <li className="navbar__link-item">+ add new</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
