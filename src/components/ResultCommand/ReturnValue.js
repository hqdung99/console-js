import React from "react";
import classes from "./index.module.scss";
import returnValue from "../../icons/return.svg";

export default function ReturnValue(props) {
  const { command } = props;

  return (
    <>
      <div className={classes.leftPadding}>
        <img src={returnValue} alt={''} className={classes.icon} />
      </div>
      <div className={`
        ${classes.content}
        ${!command ? classes.disabled : '' }
        ${({}).toString.call(command) === '[object Number]' ? classes.number : ''}
      `}>
        {`${command}`}
      </div>
    </>
  );
}
