import React from 'react';
import '../sass/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello, World!</h1>
        <p className="subtitle">Test for Bulma CSS integration.</p>
      </div>
    );
  }
}