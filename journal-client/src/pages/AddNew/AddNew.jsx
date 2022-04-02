import "./AddNew.scss";
import React, { Component } from "react";
import axios from "axios";

const PORT = "5050";
const apiURL = `http://localhost:${PORT}`;

class AddNew extends Component {
  state = {
    file: null,
    date: "",
    location: "",
    category: "",
    camera: "",
    film: "",
    notes: "",
  };

  componentDidMount() {
    document.title = "new entry";
  }
  //   //set state once the files have been selected

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file });
  }
  async handleUpload(e) {
    e.preventDefault();
    console.log(this.state.file);
    await uploadImage(this.state.file);
  }

  //send new entry to database once it is created
  /*
  NOT DOING ANYTHING RIGHT NOW

  handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      selectedFiles: this.state.selectedFiles,
      date: this.state.date,
      location: this.state.location,
      category: this.state.category,
      camera: this.state.camera,
      film: this.state.film,
      textContent: this.state.notes,
    };
    console.log(newEntry);

    axios
      .post(apiURL + "/entries", newEntry)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
*/
  render() {
    return (
      <>
        <section className="new">
          <div className="new__wrapper">
            <h2 className="new__form-heading">new entry</h2>
            <form
              className="new__form-container"
              onSubmit={(e) => this.handleUpload(e)}
            >
              <div className="new__form-container--left">
                <label>Upload</label>
                <input
                  className="new__form-file-input"
                  name="galleryImage"
                  type="file"
                  onChange={(e) => this.handleFile(e)}
                  multiple
                />
                <label className="new__form-label">Date</label>
                <input
                  className="new__form-input"
                  onChange={this.handleChange}
                  value={this.state.date}
                  name="date"
                ></input>
                <label className="new__form-label">Location</label>
                <input
                  className="new__form-input"
                  onChange={this.handleChange}
                  value={this.state.location}
                  name="location"
                ></input>
                <label className="new__form-label">Category</label>
                <input
                  className="new__form-input"
                  onChange={this.handleChange}
                  value={this.state.category}
                  name="category"
                ></input>
              </div>
              <div className="new__form-container--right">
                <label className="new__form-label">Camera</label>
                <input
                  className="new__form-input"
                  onChange={this.handleChange}
                  value={this.state.camera}
                  name="camera"
                ></input>
                <label className="new__form-label">Film</label>
                <input
                  className="new__form-input"
                  onChange={this.handleChange}
                  value={this.state.film}
                  name="film"
                ></input>
                <label className="new__form-label">Notes</label>
                <textarea
                  className="new__form-textarea"
                  onChange={this.handleChange}
                  value={this.state.notes}
                  name="notes"
                ></textarea>
              </div>
              <button className="new__form-submit" type="submit">
                submit
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default AddNew;

const uploadImage = async (file) => {
  try {
    console.log("Upload Image", file);
    const formData = new FormData();
    formData.append("filename", file);
    formData.append("destination", "images");
    formData.append("create_thumbnail", true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const HOST = "http://localhost:";
    const url = `${HOST}/${PORT}`;

    const result = await axios.post(url, formData, config);
    console.log("REsult: ", result);
  } catch (error) {
    console.error(error);
  }
};

//// OLD CODE /////
//   onPhotoUpload = (event) => {
//     console.log(event);
//     // this.setState({ selectedFiles: event.target.files[0] });
//     this.setState({
//       selectedFiles: event.target.files[0],
//     });
//   };
