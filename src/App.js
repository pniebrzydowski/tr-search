import React, { Component } from 'react';
import './App.css';
import ResultsList from './components/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      results: null
    }
  }

  componentDidMount() {
    const { results } = this.state;
    if (results === null) {
      this.fetchResults();
    }
  }

  async fetchResults() {
    this.setState({
      fetching: true,
    });
    const response = await fetch('https://api.myjson.com/bins/18x6yt')
    const json = await response.json();
    this.setState({
      fetching: false,
      results: json
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <ResultsList results={results} />
      </div>
    )
  }
}

export default App;
