import "./AddNew.scss";
import React, { Component } from "react";
import axios from "axios";
import FormData from "form-data";
import { Redirect } from "react-router-dom";

// const PORT = "5050";
const serverURL = process.env.REACT_APP_SERVER_URL;

class AddNew extends Component {
  state = {
    file: null,
    date: "",
    location: "",
    category: "",
    camera: "",
    film: "",
    notes: "",
    imageURL: "",
    isRedirecting: false,
    //error states for blank fields
    dateERR: false,
    locationERR: false,
    categoryERR: false,
    cameraERR: false,
    filmERR: false,
    notesERR: false,
  };

  //handle the files uploaded
  handleFile(e) {
    let file = e.target.files;
    this.setState({ file });
  }
  async handleUpload(e) {
    e.preventDefault();

    let newEntry = {
      date: this.state.date,
      location: this.state.location,
      category: this.state.category,
      camera: this.state.camera,
      film: this.state.film,
      textContent: this.state.notes,
    };

    if (!this.isFormValid()) {
      this.isFieldEmpty();
      return false;
    }
    await uploadImage(this.state.file, newEntry);
    this.setState({ isRedirecting: true });
  }

  //set state for other info inputs
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //form validation to check if all fields are filled
  isFormValid = () => {
    if (
      !this.state.date.trim() ||
      !this.state.location.trim() ||
      !this.state.category.trim() ||
      !this.state.camera.trim() ||
      !this.state.film.trim() ||
      !this.state.notes.trim()
    ) {
      return false;
    }
    return true;
  };

  //check to set which form fields are empty
  isFieldEmpty = () => {
    if (!this.state.date.length > 0) {
      this.setState({ dateERR: true });
    } else this.setState({ dateERR: false });
    if (!this.state.location.length > 0) {
      this.setState({ locationERR: true });
    } else this.setState({ locationERR: false });
    if (!this.state.category.length > 0) {
      this.setState({ categoryERR: true });
    } else this.setState({ categoryERR: false });
    if (!this.state.camera.length > 0) {
      this.setState({ cameraERR: true });
    } else this.setState({ cameraERR: false });
    if (!this.state.film.length > 0) {
      this.setState({ filmERR: true });
    } else this.setState({ filmERR: false });
    if (!this.state.notes.length > 0) {
      this.setState({ notesERR: true });
    } else this.setState({ notesERR: false });
  };

  render() {
    const {
      date,
      location,
      category,
      camera,
      film,
      notes,
      isRedirecting,
      dateERR,
      locationERR,
      categoryERR,
      cameraERR,
      filmERR,
      notesERR,
    } = this.state;

    if (isRedirecting) {
      return <Redirect to="/gallery/new/success" />;
    }

    return (
      <>
        <section className="new">
          <div className="new__wrapper">
            <form className="new__form" onSubmit={(e) => this.handleUpload(e)}>
              <h2 className="new__form-heading">new entry</h2>
              <div className="new__form-container">
                <div className="new__form-container--left">
                  <label>Upload</label>
                  <input
                    className="new__form-file-input"
                    name="galleryImage"
                    type="file"
                    onChange={(e) => this.handleFile(e)}
                    multiple
                  />
                  <label className="new__form-label">
                    Date
                    {dateERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <input
                    className="new__form-input"
                    onChange={this.handleChange}
                    value={date}
                    name="date"
                    placeholder="yyyy-mm-dd"
                  ></input>
                  <label className="new__form-label">
                    Location
                    {locationERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <input
                    className="new__form-input"
                    onChange={this.handleChange}
                    value={location}
                    name="location"
                  ></input>
                  <label className="new__form-label">
                    Category
                    {categoryERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <input
                    className="new__form-input"
                    onChange={this.handleChange}
                    value={category}
                    name="category"
                  ></input>
                </div>
                <div className="new__form-container--right">
                  <label className="new__form-label">
                    Camera
                    {cameraERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <input
                    className="new__form-input"
                    onChange={this.handleChange}
                    value={camera}
                    name="camera"
                  ></input>
                  <label className="new__form-label">
                    Film
                    {filmERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <input
                    className="new__form-input"
                    onChange={this.handleChange}
                    value={film}
                    name="film"
                  ></input>
                  <label className="new__form-label">
                    Notes
                    {notesERR ? (
                      <span style={{ color: "red" }}> *required</span>
                    ) : null}
                  </label>
                  <textarea
                    className="new__form-textarea"
                    onChange={this.handleChange}
                    value={notes}
                    name="notes"
                  ></textarea>
                </div>
              </div>
              <div className="new__form-submit--container">
                <button className="new__form-submit" type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default AddNew;

//handle upload of image and package it with other info from form
const uploadImage = async (file, entry) => {
  try {
    const formData = new FormData();
    Array.from(file).forEach((img) => {
      formData.append("galleryImage", img);
    });
    //assign keys object containing entry details in order to append to formdata
    Object.keys(entry).forEach((key) => formData.append(key, entry[key]));
    formData.append("destination", "uploads");
    formData.append("create_thumbnail", true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const url = `${serverURL}/upload`;

    const result = await axios.post(url, formData, config);
    console.log("Result: ", result);
  } catch (error) {
    console.log(error.message);
  }
};
