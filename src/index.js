/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import LandingPage from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Index from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ForgotPWPage from "views/examples/ForgotPWPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SetupPage from "views/examples/SetupPage";
import SearchPage from "views/examples/SearchPage.js";
import ProductPage from "views/examples/ProductPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ArtistsPage from "views/examples/ArtistsPage.js";
import NucleoPage from "views/NucleoIcons.js";
import AddService from "views/examples/AddService.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/stupid-page"
        render={(props) => <ForgotPWPage {...props} />}
      />
      <Route path="/Setup-page" render={(props) => <SetupPage {...props} />} />
      <Route
        path="/artists-page"
        render={(props) => <ArtistsPage {...props} />}
      />
      <Route
        path="/search-page"
        render={(props) => <SearchPage {...props} />}
      />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route path="/icons-page" render={(props) => <NucleoPage {...props} />} />
      <Route
        path="/service-page"
        render={(props) => <AddService {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
