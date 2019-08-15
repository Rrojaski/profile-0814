import React from "react";
import styles from "./Header.module.scss";

import Navigation from '../../components/Navigation/Navigation';

import Image from "../../components/Image/Image";

//images
import helmet from '../../images/helmet.png';
import coliseum from '../../svg/coliseum.svg';

const Header = props => {
  return (
    <React.Fragment>
      <div className={`${styles.header}`}>
        <svg src={coliseum} />
        <Navigation />
      </div>
    </React.Fragment>
  );
};

export default Header;
