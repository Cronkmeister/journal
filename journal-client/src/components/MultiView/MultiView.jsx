import "./MultiView.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiFullscreenLine } from "react-icons/ri";
import { MdOutlineGridView } from "react-icons/md";

const serverURL = `http://localhost:5050`;

class MultiView extends Component {
  // constructor(props) {
  // console.log(props);
  // super(props);
  state = {
    selectedAlbumDetail: [],
    selectedPhotos: [],
  };

  componentDidMount() {
    document.title = "gallery image view:multi";
    axios
      .get(`${serverURL}/entries/${this.props.match.params.id}`)
      .then((response) => {
        //parse whole url to get array of individual image paths
        let albumDetails = response.data;
        let parsedPhotos = JSON.parse(response.data.imageURL);
        //maps through array to get to remove 'public' from the path
        parsedPhotos = parsedPhotos.map((photo) => {
          let photoArray = photo.path.split("/");
          photoArray[0] = serverURL;
          photo.path = photoArray.join("/");
          return photo;
        });

        this.setState({
          selectedAlbumDetail: albumDetails,
          selectedPhotos: parsedPhotos,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <section className="multiView">
          <h1 className="multiView__title">
            {this.state.selectedAlbumDetail.location}
          </h1>
          <div className="multiView__container">
            <h2 className="multiView__location">
              {this.state.selectedAlbumDetail.date}
            </h2>
            <div className="multiView__container--buttons">
              <MdOutlineGridView className="view-button button-active" />
              <Link to={`/gallery/full/${this.state.selectedAlbumDetail.id}`}>
                <RiFullscreenLine className="view-button" />
              </Link>
            </div>
          </div>
          <div className="main-content">
            <div className="main-content__container">
              {this.state.selectedPhotos.map((album, index) => (
                <>
                  <img className="image col-span-2" src={album.path}></img>

                  <div className="image"></div>
                </>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MultiView;
