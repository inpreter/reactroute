import React from 'react';
import queryString from 'query-string';

class Page1Detail extends React.Component {

    constructor(props) {
        super(props);
        this.query = queryString.parse(this.props.location.search);
    }


    render() {
        return (
            <div>
                <div>Detail :  {this.props.match.params.id}</div>
                <div>Query : {this.query.name1}</div>
            </div>
        );
    }
}

export default Page1Detail;