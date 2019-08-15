import React from "react";
import styles from "./SVG.module.scss";

const SVG = props => {
  return (
    <React.Fragment>
      <svg className={`${styles.svg}`} src={props.svg} />
    </React.Fragment>
  );
};

export default SVG;
