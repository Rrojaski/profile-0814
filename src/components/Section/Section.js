import React from "react";
import styles from "./Section.module.scss";

const Section = props => {
  return (
    <React.Fragment>
      <div className={`${styles.section} ${styles[props.name]}`}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Section;
