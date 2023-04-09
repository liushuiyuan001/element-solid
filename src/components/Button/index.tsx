import type { Component, JSXElement } from 'solid-js';
import classNames from 'classnames';
import './index.less'

type ButtonProps = {
  type?: string;
  disabled?: boolean;
  children?: JSXElement;
}
const Button: Component = ({ type = 'default', disabled, children }: ButtonProps) => {
  const classes = classNames(
    'sl-btn',
    `sl-btn-${type}`,
  )
  return (
    <button disabled={disabled} class={classes}>
      {children}
    </button>
  )
}

export default Button;