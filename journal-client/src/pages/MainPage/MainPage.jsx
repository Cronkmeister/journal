import "./MainPage.scss";
import { Switch, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Gallery from "../Gallery/Gallery";
import AddNew from "../AddNew/AddNew";
import PhotoMap from "../PhotoMap/PhotoMap";
import { Component } from "react";

function MainPage(props) {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path={`${props.match.path}`} exact component={Gallery} />
        <Route path={`${props.match.path}/new`} component={AddNew} />
        <Route path={`${props.match.path}/map`} component={PhotoMap} />
      </Switch>
    </>
  );
}

export default MainPage;
