import React from 'react';
import './PersonForm.css';

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: Object.assign({}, props.value),
        };

        this.departments = ['소프', '컴공', '정통', '글티'];
    }

    onInputChange(event) {
        let target = event.target;
        let name = target.name;
        let value = (target.type === "checkbox" || target.type === "radio"
            ? target.checked : target.value);
        this.setState({ person: Object.assign(this.state.person, { [name]: value }) });
    }

    onSave(event) {
        this.props.onChange(this.state.person);
    }

    onCancel(event) {
        this.props.onCancel();
    }



    render() {
        let person = this.state.person;
        const idForm = <div>
            <label>ID </label>
            <input type="text" name="id" value={person.id}
                onChange={this.onInputChange.bind(this)} />
        </div>;

        return (
            <div className="PersonForm">
                {!this.props.value.id ? idForm : ''}
                <div>
                    <label>이름 </label>
                    <input type="text" name="name" value={person.name}
                        onChange={this.onInputChange.bind(this)} />
                </div>
                <div>
                    <label>나이 </label>
                    <input type="text" name="age" value={person.age}
                        onChange={this.onInputChange.bind(this)} />
                </div>
                {/* <div>
                    <label>소속 </label>
                    <select value={person.department} name='department' onChange={this.onInputChange.bind(this)} >
                        {this.departments.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
                <div>
                    <label>재학 </label>
                    <input type="checkbox" name="enrolled" checked={person.enrolled}
                        onChange={this.onInputChange.bind(this)} />
                </div> */}
                <div>
                    <button type="button" onClick={this.onSave.bind(this)}>저장</button>
                    <button type="button" onClick={this.onCancel.bind(this)}>취소</button>

                </div>
            </div>

        );
    }
}
export default PersonForm;
