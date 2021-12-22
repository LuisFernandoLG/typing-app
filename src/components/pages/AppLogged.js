import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { NavBar } from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";
import { AdminPage } from "./AdminPage";
import { ExercisePage } from "./ExercisePage";
import { HomePage } from "./HomePage";
import { RankingPage } from "./RankingPage";
import { StadisticsPage } from "./StadisticsPage";

const AppLogged = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <GridWrapper>
      <NavBar toggleIsOpen={toggleIsOpen} />
      {isOpen && <SideBar toggleIsOpen={toggleIsOpen} />}
      <Switch>
        <Route
          path={`${routes.EXERCICE_PAGE}/:idQuote`}
          children={<RouteWrapper> {<ExercisePage />} </RouteWrapper>}
        />

        <Route
          exact
          path={routes.ADMIN_PAGE}
          children={<RouteWrapper> {<AdminPage />} </RouteWrapper>}
        />

        <Route
          exact
          path={routes.RANKING_PAGE}
          children={<RouteWrapper> {<RankingPage />} </RouteWrapper>}
        />

        <Route
          exact
          path={routes.STADISTICS_PAGE}
          children={<RouteWrapper> {<StadisticsPage />} </RouteWrapper>}
        />
        <Route
          exact
          path={routes.APP}
          children={<RouteWrapper> {<HomePage />} </RouteWrapper>}
        />
      </Switch>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr 1fr;
`;

const RouteWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
`;

export default AppLogged;
