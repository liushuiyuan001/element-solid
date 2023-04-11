import type { Component, JSXElement } from 'solid-js';
import classNames from 'classnames';
import './index.less'

export type ButtonProps = {
  type?: "default" | "primary" | "dashed" | "text" | "link";
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
      {children || `${type} Button` }
    </button>
  )
}

export default Button;