import "./MultiView.scss";
import mount01 from "../../assests/images/trip01/mount01.jpg";
import mount02 from "../../assests/images/trip01/mount02.jpg";
import mount03 from "../../assests/images/trip01/mount03.jpg";
import mount04 from "../../assests/images/trip01/mount04.jpg";
import mount05 from "../../assests/images/trip01/mount05.jpg";
import mount06 from "../../assests/images/trip01/mount06.jpg";
import mount07 from "../../assests/images/trip01/mount07.jpg";

function MultiView() {
  return (
    <>
      <section className="multiView">
        <h1 className="multiView__title">Camping on West Lion</h1>
        <h2 className="multiView__location">Vancouver</h2>
        <div class="main-content">
          <div class="main-content__container">
            <img class="image col-span-2" src={mount01}></img>
            <div class="image"></div>

            <img class="image col-span-2" src={mount02}></img>
            <div class="image"></div>
            <img class="image col-span-2" src={mount07}></img>
            <div class="image"></div>
            <img class="image col-span-2" src={mount04}></img>
            <div class="image"></div>
            <img class="image col-span-2" src={mount05}></img>
            <div class="image"></div>
            <img class="image col-span-2" src={mount06}></img>
            <div class="image"></div>
            <img class="image col-span-2" src={mount03}></img>
            <div class="image"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MultiView;
