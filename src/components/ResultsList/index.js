import React, { Component } from 'react';
import styled from 'styled-components';
import Tour from '../Tour';

const TourList = styled.section`
  background-color: rgb(235, 238, 242);
  color: #2c3e50;
  padding: 20px 10px;
  font-size: 14px;
  font-family: Helvetica,Arial,FreeSans,sans-serif;
`;

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
      <TourList>
        {results.map(result => {
          return <Tour key={result.id} tour={result} />;
        })}
      </TourList>
    )
  }
}

export default ResultsList;
