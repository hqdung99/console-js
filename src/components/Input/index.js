import React from 'react';
import classes from './index.module.scss';
import pointerIcon from '../../icons/pointer.svg';

export default function Input(props) {
  const {
    value,
    onChange,
    onKeyDown
  } = props;
  const length = value.split('\n').length;
  const multiline = length > 1;
  const lengthRows = length > 20 ? 20 : length;

  return (
    <div className={classes.container}>
      <div className={classes.leftPadding}>
        <img src={pointerIcon} alt={''} className={classes.icon} />
      </div>
      <textarea
        className={classes.input}
        multiple={multiline}
        rows={lengthRows}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
