import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import '../styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

// export default class App extends React.Component<any, any> {
//   render(): React.ReactNode {
//     return (
//       <BrowserRouter>
//        <Switch>
//          <Route exact path='/' component={HomePage} />
//        </Switch>
//      </BrowserRouter>
//     );
//   }
// }