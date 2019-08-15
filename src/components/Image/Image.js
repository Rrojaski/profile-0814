import React from "react";
import styles from "./Image.module.scss";




const Image = props => {
  return (
    <React.Fragment>
      <img className={`${styles.logo}`} src={props.image} />
    </React.Fragment>
  );
};

export default Image;
