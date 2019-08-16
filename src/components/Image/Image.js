import React from "react";
import styles from "./Image.module.scss";




const Image = props => {
  return (
    <React.Fragment>
      <img className={`${styles[props.name]}`} src={props.src} />
    </React.Fragment>
  );
};

export default Image;
