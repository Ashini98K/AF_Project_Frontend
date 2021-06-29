import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import KeySpeakerStyles from '../Stylesheet/key-speaker.css';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
class AddKeySpeaker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h1 className='Add user'>ICAF</h1>
                        <div className="imagebackground">
                            <Player
                                autoplay
                                loop
                                src="https://assets6.lottiefiles.com/packages/lf20_fksm3n4x.json"
                                style={{ height: "600px", width: "600px" }}
                            >
                                <Controls
                                    visible={false}
                                    buttons={["play", "repeat", "frame", "debug"]}
                                />
                            </Player>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <h3 className='login'>Add Key Speakers</h3>
                        <h3 className='instructions'>Add Key speaker's details here</h3>
                        <form>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                            <input className='inputfield'
                                placeholder='Key speaker name'
                            >
                            </input>
                            {/*<Mail size={25}/>*/}


                            <input className='inputfield'
                                placeholder='Key Speaker image link'
                            >
                            </input>

                            <input className='inputDescriptionfield'
                                placeholder='Description'
                            >
                            </input>

                            <row className='d-flex justify-content-between'>

                                <Col sm='4'></Col>

                                <button className='nextBtn'>
                                    <span className='btnTxt'>Submit</span>
                                </button>
                            </row>

                        </form>
                    </Col>
                    <Col sm='2'></Col>
                </Row>
            </div>
        )
    }
}

export default AddKeySpeaker