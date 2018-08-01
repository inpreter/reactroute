import React from 'react';
import queryString from 'query-string';

class Page2 extends React.Component {

  constructor(props) {
    super(props);
    this.query = queryString.parse(this.props.location.search);
  }

  render() {
    return (
      <div>
        Page2 {this.query.name1} / {this.query.name2}
      </div>);
  }
}

export default Page2;