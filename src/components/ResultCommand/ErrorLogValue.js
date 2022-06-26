import React from 'react';
import classes from './index.module.scss';

export default function ErrorLogValue(props) {
  const { command } = props;

  return (
    <>
      <div className={classes.leftPadding}>
      </div>
      <div className={`${classes.content} ${classes.error}`}>
        {`${command?.name}: ${command?.message}`}
      </div>
    </>
  )
}
