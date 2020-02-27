import React from "react";
import ThemeContextProvider from "./components/container/ThemeContext";
import Calendar from "./components/imgPage/Calendar";
import Exhibition from "./components/imgPage/Exhibition";
import Featured from "./components/imgPage/Featured";
import Art from "./components/imgPage/Art";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/">
            <ThemeContextProvider />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/exhibition">
            <Exhibition />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
