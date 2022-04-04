import "./Gallery.scss";
import AlbumView from "../../components/AlbumView/AlbumView";
import FullView from "../../components/FullView/FullView";
import MultiView from "../../components/MultiView/MultiView";

function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="gallery__wrapper">
          {/* <AlbumView /> */}
          <FullView />
          {/* <MultiView /> */}
        </div>
      </section>
    </>
  );
}

export default Gallery;
