import "./NarBar.scss";

function NavBar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__container">
            <h2 className="navbar__logo">Jounrnal</h2>
            <ul className="navbar__links">
              <li className="navbar__link-item">gallery</li>
              <li className="navbar__link-item">+ add new</li>
              <li className="navbar__link-item">collections</li>
              <li className="navbar__link-item">map</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
