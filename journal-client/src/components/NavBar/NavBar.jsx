import "./NarBar.scss";

function NavBar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__container">
            <h2 className="navbar__logo">Jounrnal</h2>
            <ul className="navbar__links">
              <li className="navbar__link-item">Gallery</li>
              <li className="navbar__link-item">Explore</li>
              <li className="navbar__link-item">Collections</li>
              <li className="navbar__link-item">Map</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
