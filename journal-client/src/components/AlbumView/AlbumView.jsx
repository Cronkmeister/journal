import "./AlbumView.scss";
import album01 from "../../assests/images/albums01/album01.jpg";
import album02 from "../../assests/images/albums01/album02.jpg";
import album03 from "../../assests/images/albums01/album03.jpg";
import album04 from "../../assests/images/albums01/album04.jpg";
import album05 from "../../assests/images/albums01/album05.jpg";
import album06 from "../../assests/images/albums01/album06.jpg";
import album07 from "../../assests/images/albums01/album07.jpg";
import album08 from "../../assests/images/albums01/album08.jpg";
import album09 from "../../assests/images/albums01/album09.jpg";
import album10 from "../../assests/images/albums01/album10.jpg";
import album11 from "../../assests/images/albums01/album11.jpg";

function AlbumView() {
  return (
    <>
      <section className="albums">
        <div className="albums__wrapper">
          <h1 className="albums__sort">2021</h1>

          <div class="albums-content">
            <div class="albums-content__container">
              <img class="image" src={album01}></img>
              <img class="image col-row-span-2" src={album02}></img>
              <img class="image" src={album04}></img>
              <img class="image col-row-span-2" src={album05}></img>
              <img class="image" src={album06}></img>
              <img class="image" src={album07}></img>
              <img class="image" src={album08}></img>
              <img class="image col-row-span-2" src={album09}></img>
              <img class="image" src={album10}></img>
              <img class="image col-row-span-2" src={album11}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AlbumView;
