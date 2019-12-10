import React from 'react';
import '../styles/App.scss';

export default class App extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <div>
        <h1 className="title">Hello, World!</h1>
        <p className="subtitle">Test for Bulma CSS integration.</p>
      </div>
    );
  }
}