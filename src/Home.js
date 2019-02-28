import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Grid from './Grid';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      films : [],
      loading: true,
      sortBy: 'episode_id'
    };
  }
  componentDidMount(){
    fetch('https://swapi.co/api/films/')
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        const films = this.sortBy(data.results, 'episode_id');
        this.setState({films, loading: false});
      });
  }
  sortBy(array, by){
    const sortedArray = array.sort((a, b)=>{
      if(a[by] > b[by]){
        return 1;
      }
      if(a[by] < b[by]){
        return -1;
      }
      return 0;
    });
    return sortedArray;
  }
  sortFilms(sortBy){
    const films = this.sortBy(this.state.films, sortBy);
    this.setState({films, sortBy});
  }
  render() {
    return (
      <div className="App">
        <section className="container">
          <label>Sort By:
            <select value={this.state.sortBy} onChange={(event)=>this.sortFilms(event.target.value)}>
              <option value="epidosode_id">Episode</option>
              <option value="title">Title</option>
              <option value="created">Released date</option>
            </select>
          </label>
        </section>
        <section className="container">
          {this.state.loading && <p>loading...</p>}
          <Grid films={this.state.films} />
        </section>
      </div>
    );
  }
}

export default Home;
