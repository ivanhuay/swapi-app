import React, { Component } from 'react';
import {Grid} from '../../components';
import {connect} from 'react-redux';
import {getAllMovies, sortMovies} from '../../store/actions';
class Home extends Component {
  componentDidMount(){
    this.props.getAllMovies();
  }
  sortFilms(sortBy){
    this.props.sortMovies(sortBy);
  }
  render() {
    return (
      <div className="App">
        <section className="container">
          <label>Sort By:
            <select value={this.props.sortBy} onChange={(event)=>this.sortFilms(event.target.value)}>
              <option value="epidosode_id">Episode</option>
              <option value="title">Title</option>
              <option value="created">Released date</option>
            </select>
          </label>
        </section>
        <section className="container">
          {this.props.loading && <p>loading...</p>}
          <Grid films={this.props.movies} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
    sortBy: state.sortBy
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
      return {
        getAllMovies: () => {dispatch(getAllMovies())},
        sortMovies: (sortByStr) => {dispatch(sortMovies(sortByStr))}
      }
  })(Home);
