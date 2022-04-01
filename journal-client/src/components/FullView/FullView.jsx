import "./FullView.scss";
import mountain01 from "../../assests/images/mountain01.jpg";

function FullView() {
  return (
    <>
      <div className="gallery__image-container">
        <h1 className="gallery__title">Seymour Mountain</h1>
        <img
          className="gallery__hero-image"
          src={mountain01}
          alt="mountains"
        ></img>

        <div className="gallery__image-info">
          <p className="gallery__image-info--date">16.11.2019</p>
          <p className="gallery__image-info--text">Canon AE-1</p>
          <p className="gallery__image-info--text">Portra 400</p>
        </div>
        <p className="gallery__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat sem ut aliquet tristique. Fusce quis scelerisque massa, nec
          vehicula nisl. Mauris ultricies nunc eu aliquam consequat. Aliquam
          euismod mattis est, ut pharetra urna convallis at. Suspendisse sodales
          nec nunc quis elementum. Nam eget lacinia sem, ut lacinia neque.
          Curabitur et pharetra urna, at malesuada risus. Proin ullamcorper
          fringilla auctor. Quisque sollicitudin dapibus felis at fermentum.
          Donec iaculis finibus ante. Integer lorem nibh, ornare quis pharetra
          a, egestas id erat. Proin id eros eget lacus tincidunt maximus et non
          nulla.
        </p>
      </div>
    </>
  );
}

export default FullView;
