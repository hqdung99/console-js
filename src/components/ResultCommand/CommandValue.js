import React from "react";
import classes from "./index.module.scss";
import commandIcon from "../../icons/command.svg";

export default function CommandValue(props) {
  const { command } = props;

  return (
    <>
      <div className={classes.leftPadding}>
        <img src={commandIcon} alt={''} className={classes.icon} />
      </div>
      <div className={classes.content}>
        {command}
      </div>
    </>
  );
}
