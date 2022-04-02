import "./Gallery.scss";
import FullView from "../../components/FullView/FullView";
import MultiView from "../../components/MultiView/MultiView";

function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="gallery__wrapper">
          {/* <FullView /> */}
          <MultiView />
        </div>
      </section>
    </>
  );
}

export default Gallery;
