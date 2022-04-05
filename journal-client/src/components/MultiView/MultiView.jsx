import "./MultiView.scss";
import mount01 from "../../assests/images/trip01/mount01.jpg";
import mount02 from "../../assests/images/trip01/mount02.jpg";
import mount03 from "../../assests/images/trip01/mount03.jpg";
import mount04 from "../../assests/images/trip01/mount04.jpg";
import mount05 from "../../assests/images/trip01/mount05.jpg";
import mount06 from "../../assests/images/trip01/mount06.jpg";
import mount07 from "../../assests/images/trip01/mount07.jpg";
import { Component } from "react";
import axios from "axios";

const serverURL = `http://localhost:5050`;

class MultiView extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      selectedAlbumDetail: [],
      selectedPhotos: [],
    };
  }

  componentDidMount() {
    document.title = "gallery image view:multi";
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
        console.log(parsedPhotos);

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
        <section className="multiView">
          <h1 className="multiView__title">
            {this.state.selectedAlbumDetail.location}
          </h1>
          <h2 className="multiView__location">
            {this.state.selectedAlbumDetail.date}
          </h2>
          <div className="main-content">
            <div className="main-content__container">
              {this.state.selectedPhotos.map((album) => (
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
