import type { Component, JSXElement } from 'solid-js';
import classNames from 'classnames';
import './index.less'

export type ButtonProps = {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
  children?: JSXElement;
  onClick?: (e: Event) => void;
}

const Button: Component<ButtonProps> = ({ type = 'default', disabled, danger, loading, children, onClick }) => {
  const classes = classNames(
    'sl-btn',
    `sl-btn-${type}`,
    {
      'sl-btn-danger': danger,
    }
  )
  const handleClick = (e: Event) => {
    if(loading) {
      return;
    }
    onClick && onClick(e)
  }

  return (
    <button onClick={handleClick} disabled={disabled} class={classes}>
      {children || `${type} Button` }
    </button>
  )
}

export default Button;