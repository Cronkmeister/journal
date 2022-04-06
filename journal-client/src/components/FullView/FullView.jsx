import "./FullView.scss";
import Slider from "../../components/Slider/Slider";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiFullscreenLine } from "react-icons/ri";
import { MdOutlineGridView } from "react-icons/md";

const serverURL = `http://localhost:5050`;

class FullView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlbumDetail: [],
      selectedPhotos: [],
    };
  }

  componentDidMount() {
    document.title = "gallery image view:full";

    axios
      .get(`${serverURL}/entries/${this.props.match.params.id}`)
      .then((response) => {
        //parse whole url to get array of individual image paths
        let parsedPhotos = JSON.parse(response.data.imageURL);
        //maps through array to get to remove 'public' from the path
        parsedPhotos = parsedPhotos.map((photo) => {
          let photoArray = photo.path.split("/");
          photoArray[0] = serverURL;
          photo.path = photoArray.join("/");
          return photo;
        });
        this.setState({
          selectedAlbumDetail: response.data,
          selectedPhotos: parsedPhotos,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="gallery__wrapper">
          <div className="gallery__image-container">
            <h1 className="gallery__title">
              {this.state.selectedAlbumDetail.location}
            </h1>
            <div className="multiView__container">
              <h2 className="multiView__location">
                {this.state.selectedAlbumDetail.date}
              </h2>
              <div className="multiView__container--buttons">
                <Link to={`gallery/multi/${this.state.selectedAlbumDetail.id}`}>
                  <MdOutlineGridView className="view-button " />
                </Link>
                <RiFullscreenLine className="view-button button-active" />
              </div>
            </div>
            <Slider
              selectedPhotos={this.state.selectedPhotos}
              slides={this.state.selectedPhotos}
            />
            <div className="gallery__image-info">
              <p className="gallery__image-info--date">16.11.2019</p>
              <p className="gallery__image-info--text">Canon AE-1</p>
              <p className="gallery__image-info--text">Portra 400</p>
            </div>
            <p className="gallery__description">
              {this.state.selectedAlbumDetail.textContent}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default FullView;

// .get(`${serverURL}/entries/${this.props.match.params.id}`)
