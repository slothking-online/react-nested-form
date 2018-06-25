import * as React from 'react';
import { Input as styles } from './style';
import { FieldDefinition } from '../fields';
export const Input = ({
  onChange,
  styles: overrideStyles,
  ...props
}: FieldDefinition<'string'>) => (
  <input
    className={overrideStyles ? overrideStyles.Input : styles.Input}
    onChange={(e) => {
      onChange(e.target.value);
    }}
    {...props}
  />
);
