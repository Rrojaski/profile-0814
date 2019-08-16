import React from "react";
import styles from "./Paragraph.module.scss";

const Paragraph = props => {
  return (
    <React.Fragment>
      <p className={`${styles.paragraph} ${styles[props.size]}`}>
        {props.children}
      </p>
    </React.Fragment>
  );
};

export default Paragraph;
