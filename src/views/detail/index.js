import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {FilmDetail} from '../../components';
import {Loading} from '../../components';
import {connect} from 'react-redux';
import {getMovie} from '../../actions/movie-detail';

class Detail extends Component{
  componentDidMount(){
    this.props.getMovie(this.props.match.params.episode_id);
  }
  render(){
    return <div className="container">
      {
        !this.props.loading ? <FilmDetail film={this.props.film}/> : <Loading />
      }
    </div>
  }
}
function mapStateToProps(state) {
  return {
    film: state.currentMovie.data,
    loading: state.currentMovie.loading,
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
    return {
      getMovie: (movieId)=> dispatch(getMovie(movieId))
    }
  }
)(Detail);
