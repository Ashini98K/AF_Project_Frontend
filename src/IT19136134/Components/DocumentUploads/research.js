import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Research from "../../Stylesheets/research.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";

class ResearchUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      tittle: "",
      descritpion: "",
      document: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  componentDidMount() {
    this.state.userId = this.props.match.params.id;
    console.log("User ID :", this.state.userId);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ document: event.target.files[0] });
  };
  onSubmit(e) {
    e.preventDefault();

    const research = new FormData();
    research.append("userId", this.state.userId);
    research.append("tittle", this.state.tittle);
    research.append("description", this.state.descritpion);
    research.append("document", this.state.document);

    console.log(research);
    axios
      .post("http://localhost:5000/research/createresearch", research)
      .then((response) => {
        console.log("Data :", response);

        alert("Inserted successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1"></Col>
          <Col sm="2">
            <div className="imageStyle">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_h59xofz0.json"
                style={{ height: "160px", width: "160px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </Col>
          <Col sm="5">
            <h1 className="topic">Researcher</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="7">
            <form onSubmit={this.onSubmit} enctype="multipart/form-data">
              <input
                className="researchInput"
                placeholder="Tittle of the Research"
                name="tittle"
                value={this.state.tittle}
                onChange={this.onChange}
                required
              ></input>
              <textarea
                className="researchtextarea"
                placeholder="Brief Description"
                name="descritpion"
                value={this.state.descritpion}
                onChange={this.onChange}
                required
              >
                {this.state.descritpion}
              </textarea>
              <row className="d-flex justify-content-between">
                <Col></Col>
                <input
                  type="file"
                  className="researchfile"
                  onChange={this.onFileChange}
                  accept="application/pdf"
                  required
                ></input>
                <button className="submitbtn">Submit</button>
              </row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResearchUpload;
