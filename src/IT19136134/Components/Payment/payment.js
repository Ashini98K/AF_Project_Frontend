import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { Col, Row } from "reactstrap";
import User from "../../Stylesheets/payment.css";
import "@fontsource/oleo-script-swash-caps";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Payment() {
  async function handleToken(token) {
    console.log(token);

    let details = {
      amount: 500,
      id: token.id,
    };
    await axios
      .post("http://localhost:5000/stripe/charge", details)
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div>
      <Row>
        <Col sm="1"></Col>
        <Col sm="5">
          <h2 className="paymentTopic">Please make registration payment </h2>

          <h3
            className="mainTopic"
            style={{ fontFamily: "Oleo Script Swash Caps" }}
          >
            Stripe{" "}
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <Stripe
              stripeKey="pk_test_51IpQyrFF7EHqc9HHHj1TzKcpG7kg8uN8B7biD7xPeXFZjoi1vcHnKMnqYsW71Z0zqx8OrHeY9Sb4ju3Moj6GbDEt00V0DV3uW2"
              token={handleToken}
              className="paybtn"
            />
          </div>
        </Col>
        <Col sm="4">
          <div className="imagestyle">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_yzoqyyqf.json"
              style={{ height: "610px", width: "640px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
