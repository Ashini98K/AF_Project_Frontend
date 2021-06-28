import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Research from "../../Stylesheets/research.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";

class WorkShopPresentationUpload extends Component {
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

    const presentation = new FormData();
    presentation.append("userId", this.state.userId);
    presentation.append("tittle", this.state.tittle);
    presentation.append("description", this.state.descritpion);
    presentation.append("document", this.state.document);

    console.log(presentation);
    axios
      .post("http://localhost:5000/proposal/createproposal", presentation)
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
                src="https://assets9.lottiefiles.com/packages/lf20_teubekfl.json"
                style={{ height: "155px", width: "155px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </Col>
          <Col sm="8">
            <h1 className="topic">WorkShop Presenter</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="7">
            <form onSubmit={this.onSubmit} enctype="multipart/form-data">
              <input
                className="researchInput"
                placeholder="Tittle of the Presentation"
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
                  accept="application/vnd.ms-powerpoint , application/vnd.openxmlformats-officedocument.presentationml.presentation"
                  onChange={this.onFileChange}
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

export default WorkShopPresentationUpload;
