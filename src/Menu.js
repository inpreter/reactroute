import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/p1">Page1</Link>
                </li>
                <li>
                    <Link to="/p2">Page2</Link>
                </li>
                <li>
                    <Link to="/p3">Page3</Link>
                </li>
                <li>
                    <Link to="/person">Person</Link>
                </li>
            </ul>
        );
    }
}

export default Menu;