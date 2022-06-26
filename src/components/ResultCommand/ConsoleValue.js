import React from 'react';
import classes from './index.module.scss';

export default function ConsoleValue(props) {
  const { command } = props;

  return (
    <>
      <div className={classes.leftPadding}>
      </div>
      <div className={classes.content}>
        {Object.values(command).join(' ')}
      </div>
    </>
  )
}
