import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./App.scss";

//test
import Header from "./layout/Header/Header";
import Section from "./components/Section/Section";
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";

//Images
import animeshop from "./images/animeshop.jpg";

function App() {
  return (
    <Fragment>
      <Header />
      <Section name="main">
        <Grid>
          <Row center="xs" middle="xs">
            <Col xs={11}>
              <Title size="large">Roman Rojas</Title>
              <Title size="small">Junior Frontend Developer</Title>
              <Button href="#" color="primary">
                discover me
              </Button>
            </Col>
          </Row>
        </Grid>
      </Section>
      <Section name="second">
        <Grid>
          <Row center='xs' middle='xs'>
            <Col>
              <Title size="medium">work experience</Title>
              <div className="second-conatiner">
                <div className="p-container">
                  <Paragraph size="large">
                    YOU'RE GOING TO FALL IN LOVE WITH NATURE
                  </Paragraph>
                  <Paragraph size="medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui.
                  </Paragraph>
                  <Paragraph size="large">
                    LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
                  </Paragraph>
                  <Paragraph size="medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores nulla deserunt voluptatum nam.
                  </Paragraph>
                </div>
                <div className="showcase-container">
                  <a target="_blank" href="https://www.anime-shop-online.com">
                    <Image name="showcase" src={animeshop} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Section>
    </Fragment>
  );
}

export default App;
