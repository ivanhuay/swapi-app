import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {CharacterDetail} from '../../components';
import {Loading} from '../../components';
export default class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
        character: false,
        loading: false,
        id: props.match.params.id
    };
  }
  componentDidMount(){
    this.updateCharacterData(this.state.id);
  }
  updateCharacterData(id){
    fetch(`https://swapi.co/api/people/${id}/`)
    .then((response)=>{
      return response.json();
    })
    .then((character)=>{
      this.setState({character, loading: false});
    });
  }
  render(){
    return <div className="container">
      {
        this.state.character ? <CharacterDetail character={this.state.character}/> : <Loading />
      }
    </div>
  }
}
