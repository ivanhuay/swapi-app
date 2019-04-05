import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {FilmDetail} from '../../components';
import {Loading} from '../../components';
export default class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
        film: false,
        loading: false,
        episode_id: props.match.params.episode_id
    };
  }
  componentDidMount(){
    this.updateFilmData(this.state.episode_id);
  }
  updateFilmData(episode_id){
    fetch(`https://swapi.co/api/films/${episode_id}`)
    .then((response)=>{
      return response.json();
    })
    .then((film)=>{
      this.setState({film, loading: false});
    });
  }
  render(){
    return <div className="container">
      {
        this.state.film ? <FilmDetail film={this.state.film}/> : <Loading />
      }
    </div>
  }
}
