import "./Edit.scss";
import React, { Component } from "react";
import axios from "axios";
import { convertTime } from "../../utilities/convertTime";

//set id of incoming entry as variable

class Edit extends Component {
  state = {
    location: "",
    category: "",
    textContent: "",
    date: "",
    imageURL: "",
    camera: "",
    film: "",
    isRedirecting: false,
  };

  componentDidMount() {
    document.title = "Edit Entry";
    this.fetchEntryInfo();
  }

  //load the details from entry to be editted
  fetchEntryInfo() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:5050/entries/${id}`)
      .then((response) => {
        let data = response.data;
        this.setState({
          date: convertTime(data.date),
          location: data.location,
          category: data.category,
          camera: data.camera,
          film: data.film,
          textContent: data.textContent,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //allows for form field values to be changed
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //save the new entry and make PUT request
  handleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;

    const editedEntry = {
      location: this.state.location,
      category: this.state.category,
      textContent: this.state.textContent,
      date: this.state.date,
      camera: this.state.camera,
      film: this.state.film,
    };

    axios
      .put(`http://localhost:5050/entries/${id}`, editedEntry)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <section className="new">
          <div className="new__wrapper">
            <form className="new__form" onSubmit={this.handleSubmit}>
              <h2 className="new__form-heading">edit entry</h2>
              <div className="new__form-container">
                <div className="new__form-container--left">
                  <label className="new__form-label">Date yyyy-mm-dd</label>
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
                    value={this.state.textContent}
                    name="notes"
                  ></textarea>
                </div>
              </div>
              <div className="new__form-submit--container">
                <button className="new__form-submit" type="submit">
                  save
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Edit;
