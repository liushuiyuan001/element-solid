import type { Component, JSXElement } from 'solid-js';
import classNames from 'classnames';
import './index.less'

export type ButtonProps = {
  type?: "default" | "primary" | "dashed" | "link" | "text";
  disabled?: boolean;
  children?: JSXElement;
}

const Button: Component<ButtonProps> = ({ type = 'default', disabled, children }) => {
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