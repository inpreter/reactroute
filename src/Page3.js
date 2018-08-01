import React from 'react';
import { Route, Link } from 'react-router-dom';
import Detail from './Page3Detail';

class Page3 extends React.Component {

  render() {
    const match = this.props.match;
    return (
      <div>
        <div>Page3</div>
        <ul>
          <li><Link to={`${match.url}/dt1`}>Detail #1</Link></li>
          <li><Link to={`${match.url}/value2`}>Detail #2</Link></li>
          <li><Link to={`${match.url}/stringR`}>Detail #3</Link></li>
        </ul>
        <Route exact path={match.url} render={() => (<h3>Select Link</h3>)} />
        <Route path={`${match.url}/:id`} component={Detail} />
      </div>);
  }
}

export default Page3;