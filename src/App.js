import React, { Component } from 'react';
import styled from 'styled-components';
import ResultsList from './components/ResultsList';
import { SORT_OPTIONS } from './helpers/constants';
import SelectInput from './components/modules/SelectInput';
import LoadingIndicator from './components/modules/LoadingIndicator';

const StyledApp = styled.section`
  padding: 20px 10px;
`;

const StyledHeader = styled.header`
  padding-bottom: 20px;
  text-align: right;

  label {
    font-weight: bold;
    color: #818d99;
    margin-right: 14px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      results: null,
      sortedBy: {
        column: 'price',
        order: 'asc',
      }
    }
    this.setSort = this.setSort.bind(this);
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

  setSort(sortedBy) {
    console.log(sortedBy);
    this.setState({ sortedBy });
  }

  getSortedResults() {
    const { sortedBy, results } = this.state;
    if (results === null) return null;
    const sortedResults = results.sort((a, b) => {
      if (sortedBy.order === 'asc') {
        return a[sortedBy.column] - b[sortedBy.column];
      }
      return b[sortedBy.column] - a[sortedBy.column];
    });
    return sortedResults;
  }

  render() {
    const results = this.getSortedResults();
    return (
      <StyledApp>
        {results === null && <LoadingIndicator />}
        <StyledHeader>
          <label htmlFor="results-sort">Sort by</label>
          <SelectInput disabled={results === null} options={SORT_OPTIONS} onChange={this.setSort} id="results-sort" />
        </StyledHeader>
        <ResultsList results={results} />
      </StyledApp>
    )
  }
}

export default App;
