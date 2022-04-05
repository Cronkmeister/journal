import "./AlbumView.scss";
import { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const serverURL = `http://localhost:5050`;

class AlbumView extends Component {
  state = {
    entryList: [],
    entryInfo: {},
    albumArray: [],
  };

  componentDidMount() {
    axios
      .get(serverURL + "/entries")
      .then((response) => {
        let newAlbums = response.data.map((album) => {
          let parsedPhotos = JSON.parse(album.imageURL);

          let photoArray = parsedPhotos[0].path.split("/");
          photoArray[0] = serverURL;
          parsedPhotos[0].path = photoArray.join("/");

          return {
            photo: parsedPhotos[0],
            id: album.id,
            location: album.location,
          };
        });

        this.setState({
          entryList: response.data,
          entryInfo: response.data[0],
          albumArray: newAlbums,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.albumArray);

    return (
      <>
        <section className="albums">
          <div className="albums__wrapper">
            <h1 className="albums__sort">2021</h1>
            <div className="albums-content">
              <div className="albums-content__container">
                {this.state.albumArray.map((album) => (
                  <Link
                    to={`gallery/multi/${album.id}`}
                    className={
                      album.id % 5 == 0
                        ? "box zoom-in col-row-span-2"
                        : "box zoom-in "
                    }
                  >
                    <img
                      className="image"
                      key={album.id}
                      src={album.photo.path}
                    ></img>

                    <p>{album.location}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AlbumView;

// let parsedPhotos = JSON.parse(response.data[0].imageURL);
// parsedPhotos = parsedPhotos.map((photo) => {
//   let photoArray = photo.path.split("/");
//   photoArray[0] = serverURL;
//   photo.path = photoArray.join("/");
//   return photo;
// });
