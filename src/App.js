import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";
import HomePage from "./containers/HomePage/HomePage";
import WorkroomPage from "./containers/WorkroomPage/WorkroomPage";
import Room237Page from "./containers/Room237Page/Room237Page";
import ElevatorPage from "./containers/ElevatorPage/ElevatorPage";
import BathroomPage from "./containers/BathroomPage/BathroomPage";
import CorridorPage from "./containers/CorridorPage/CorridorPage";
import SnowfieldPage from "./containers/SnowfieldPage/SnowfieldPage";
import "./App.css";

const app = () => {
  return (
    <div className="App">
      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.workroom}>
            <WorkroomPage />
          </Route>
          <Route exact path={appRoutes.room237}>
            <Room237Page />
          </Route>
          <Route exact path={appRoutes.elevator}>
            <ElevatorPage />
          </Route>
          <Route exact path={appRoutes.bathroom}>
            <BathroomPage />
          </Route>
          <Route exact path={appRoutes.corridor}>
            <CorridorPage />
          </Route>
          <Route exact path={appRoutes.snowfield}>
            <SnowfieldPage />
          </Route>
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>
    </div>
  );
};

export default app;
