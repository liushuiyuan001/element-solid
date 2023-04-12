import type { Component } from 'solid-js';

import { Button } from './components'
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const onClick = () => {
    console.log('123')
  }
  return (
    <div class={styles.App}>
      <Button type='primary'>123</Button>
      <Button type='default' onClick={onClick}>456</Button>
      <Button type='dashed'>789</Button>
      <Button type='text'></Button>
      <Button type='link'></Button>

      <Button type='primary' disabled>123(disabled)</Button>
      <Button type='default' disabled>456(disabled)</Button>
      <Button type='dashed' disabled>789(disabled)</Button>
      <Button type='text' disabled></Button>
      <Button type='link' disabled></Button>

      <Button type='primary' danger>danger 123</Button>
      <Button type='default' onClick={onClick} danger>danger 456</Button>
      <Button type='dashed' danger>danger 789</Button>
      <Button type='text' danger></Button>
      <Button type='link' danger></Button>
    </div>
  );
};

export default App;
