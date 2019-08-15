import React, { Fragment } from "react";
import "./App.scss";

//test
import Header from './layout/Header/Header';
import Section from "./components/Section/Section";
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";

//Images



function App() {
  return (
    <Fragment>
      <Header />
      <Section name='main'>
        <Button href='#' color="primary">discover me</Button>
      </Section>
    </Fragment>
  );
}

export default App;
