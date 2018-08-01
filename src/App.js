import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Menu from './Menu';
import Page3 from './Page3';
import Person from './person/App';

class App extends React.Component {
  render() {
    return (<Router>
      <div>
        <Menu></Menu>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/p1" component={Page1} />
        <Route exact path="/p1/:name" component={Page1} />
        <Route path="/p2" component={Page2} />
        <Route path="/p3" component={Page3} />
        <Route path="/person" component={Person} />
      </div>
    </Router>);
  }
}

export default App;