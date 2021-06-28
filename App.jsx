import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./src/IT19135830/Login/Login";
import Register from "./src/IT19136134/Components/Register/register";
import UserType from "./src/IT19136134/Components/Register/user-type";
import ResearchUplaod from "./src/IT19136134/Components/DocumentUploads/research";
import WorkShopPresentationUpload from "./src/IT19136134/Components/DocumentUploads/workshop-presentation";
import Payment from "./src/IT19136134/Components/Payment/payment";
import LandingPage from "./src/IT19136134/Components/LandingPage/landing-page";
import Homepage from "./src/IT19136134/Components/HomePage/home-page";

function App() {
  return (
    <div>
      <Router>
        {/* <HomePage /> */}
        <Switch>
          <Route path="/payment-gateway" component={Payment}></Route>
          <Route
            path="/workshop-presentation/:id"
            component={WorkShopPresentationUpload}
          ></Route>
          <Route path="/research-upload/:id" component={ResearchUplaod}></Route>
          <Route path="/user-type/:id" component={UserType}></Route>
          <Route path="/home-page" component={Homepage}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
