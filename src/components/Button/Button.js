import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <React.Fragment>
      <a
        className={`        
          ${styles.button} 
          ${styles[props.color]}
          ${styles[props.size]} 
          ${props.fullWidth && styles.fullWidth}
        `}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </React.Fragment>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
