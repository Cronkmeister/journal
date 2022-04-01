import "./AddNew.scss";
import React, { Component } from "react";
import axios from "axios";

class AddNew extends Component {
  state = {
    selectedFiles: [],
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
  //set state once the files have been selected
  onPhotoUpload = (event) => {
    console.log(event);
    // this.setState({ selectedFiles: event.target.files[0] });
    this.setState({
      selectedFiles: event.target.files[0],
    });
  };

  //send new entry to database once it is created
  handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      selectedFiles: this.state.selectedFiles,
      date: this.state.date,
      location: this.state.location,
      category: this.state.category,
      camera: this.state.camera,
      film: this.state.film,
      notes: this.state.notes,
    };
    console.log(newEntry);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <section className="new">
          <div className="new__wrapper">
            <h2 className="new__form-heading">new entry</h2>
            <form className="new__form-container" onSubmit={this.handleSubmit}>
              <div className="new__form-container--left">
                <label>Upload</label>
                <input
                  className="new__form-file-input"
                  name="galleryImage"
                  type="file"
                  onChange={this.onPhotoUpload}
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
