import React from "react";
import styles from "./Title.module.scss";

const Title = props => {
  return (
    <React.Fragment>
      <h1 className={`${styles.title} ${styles[props.size]}`}>
        {props.children}
      </h1>
    </React.Fragment>
  );
};

export default Title;
