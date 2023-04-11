import type { Component } from 'solid-js';

import { Button } from './components'
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Button type='default'>123</Button>
      <Button type='primary'>456</Button>
      <Button type='dashed'>789</Button>
      <Button type='text'></Button>
      <Button type='link'></Button>


      <Button type='default' disabled>123</Button>
      <Button type='primary' disabled>456</Button>
      <Button type='dashed' disabled>789</Button>
      <Button type='text' disabled></Button>
      <Button type='link' disabled></Button>
    </div>
  );
};

export default App;
