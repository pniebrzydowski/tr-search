import React, { Component } from 'react';
import Tour from '../Tour';

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
      <section>
        {results.map(result => {
          return <Tour key={result.id} tour={result} />;
        })}
      </section>
    )
  }
}

export default ResultsList;
