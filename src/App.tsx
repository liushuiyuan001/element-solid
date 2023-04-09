import type { Component } from 'solid-js';

import { Button } from './components'
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Button type='default'>123</Button>
    </div>
  );
};

export default App;
