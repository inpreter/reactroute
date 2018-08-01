import React from 'react';
import Person from './Person';
import PersonForm from './PersonForm';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { persons: [], selectedIndex: -1, isInsert: false };
  }

  // 컴포넌트 초기화
  componentDidMount() {
    axios.get('http://dev.skhu.ac.kr:8081/api/react/person/200282/getAll').then(r => {
      this.setState({ persons: r.data });
    })
  }

  onEditClick(index) {
    this.setState({ selectedIndex: index });
  }

  // 추가 처리
  handleAddClick() {
    this.setState({ isInsert: true });
  }

  onDeleteClick(index) {
    axios.get(`http://dev.skhu.ac.kr:8081/api/react/person/200282/delete/${this.state.persons[index].id}`).then(r => {
      const result = r.data.result;
      if (result === 'OK') {
        let persons = this.state.persons.slice(0);
        persons.splice(index, 1);
        this.setState({ persons: persons, selectedIndex: -1 });
      } else {
        alert(result);
      }
    })
  }

  // 초기화 버튼 처리
  handleResetClick() {
    axios.get('http://dev.skhu.ac.kr:8081/api/react/person/200282/reset').then(() => {
      // 초기화 후 데이터 조회
      this.componentDidMount();
    });
  }

  onPersonInsert(newPerson) {
    const params = new URLSearchParams();
    params.append('name', newPerson.name);
    params.append('id', newPerson.id);
    params.append('age', newPerson.age);

    axios.post('http://dev.skhu.ac.kr:8081/api/react/person/200282/save', params).then(r => {
      let persons = this.state.persons.slice(0);
      persons.push(newPerson);
      this.setState({ persons: persons, isInsert: false });
    })
  }

  onPersonInsertCancel() {
    this.setState({ isInsert: false });
  }


  onPersonChange(newPerson) {

    const params = new URLSearchParams();
    params.append('name', newPerson.name);
    params.append('id', newPerson.id);
    params.append('age', newPerson.age);

    axios.post('http://dev.skhu.ac.kr:8081/api/react/person/200282/save', params).then(r => {
      let persons = this.state.persons.slice(0);
      persons[this.state.selectedIndex] = newPerson;
      this.setState({ persons: persons, selectedIndex: -1 });
    })


  }

  onPersonChangeCancel() {
    this.setState({ selectedIndex: -1 });
  }

  renderPerson(person, index) {
    return (
      <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td><button type="button"
          onClick={this.onEditClick.bind(this, index)}>수정</button>
          <button type="button"
            onClick={this.onDeleteClick.bind(this, index)}>삭제</button>
        </td>
      </tr>
    );
  }

  renderPersonList() {
    let tags = this.state.persons.map((person, index) => this.renderPerson(person, index));
    return (
      <div>
        <table>
          <thead>
            <tr><th>id</th><th>이름</th><th>나이</th><th></th></tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.isInsert) {
      let person = { id: '', name: '', age: '' };
      return <PersonForm value={person}
        onChange={this.onPersonInsert.bind(this)}
        onCancel={this.onPersonInsertCancel.bind(this)} />;
    }
    else if (this.state.selectedIndex < 0)
      return <div>
        {this.renderPersonList()}
        <button onClick={this.handleResetClick.bind(this)}>초기화</button>
        <button onClick={this.handleAddClick.bind(this)}>추가</button>
      </div>
    else {
      let person = this.state.persons[this.state.selectedIndex];
      return <PersonForm value={person}
        onChange={this.onPersonChange.bind(this)}
        onCancel={this.onPersonChangeCancel.bind(this)} />;
    }
  }
}
export default App;
