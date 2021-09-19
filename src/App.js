import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      this.setState({ monsters: users });
    };

    fetchData();
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
