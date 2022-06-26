import React from 'react';
import chooseTypeValue from './chooseTypeValue';
import classes from './index.module.scss';

export default function ResultCommand(props) {
  const { data } = props;
  const { type, value } = data;
  const CommandComponent = chooseTypeValue(type);

  return (
    <div className={classes.resultCommandContainer}>
      <CommandComponent command={value} />
    </div>
  )
}
