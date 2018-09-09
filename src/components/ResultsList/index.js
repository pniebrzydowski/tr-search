import React, { Component } from 'react';

class ResultsList extends Component {
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
    console.log(json);
    this.setState({
      fetching: false,
      results: json
    });
  }

  render() {
    const { results } = this.state;
    if (results === null) return null;
    return (
      <div>
        {results.map(result => {
          return <div key={result.id}>{ result.tour_name }</div>;
        })}
      </div>
    )
  }
}

export default ResultsList;
