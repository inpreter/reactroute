import React from 'react';
import './Person.css';

class Person extends React.Component {
    render() {
        let person = this.props.value;
        return (
            <table className="Person">
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>{person.name}</td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td>{person.age}</td>
                    </tr>
                    {/* <tr>
                        <td>department</td>
                        <td>{person.department}</td>
                    </tr>
                    <tr>
                        <td>enrolled</td>
                        <td>{person.enrolled ? 'O' : 'X'}</td>
                    </tr> */}
                </tbody>

            </table>
        );
    }
}
export default Person;
