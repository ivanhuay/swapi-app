import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {CharacterDetail} from '../../components';
import {Loading} from '../../components';
import {connect} from 'react-redux';
import {getCharacter} from '../../actions/character';

class Detail extends Component{
  componentDidMount(){
    this.props.getCharacter(this.props.match.params.id);
  }
  updateCharacterData(id){
    this.props.getCharacter(id);
  }
  render(){
    return <div className="container">
      {
        !this.props.loading ? <CharacterDetail character={this.props.character}/> : <Loading />
      }
    </div>
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.data,
    loading: state.character.loading,
  };
}

export default connect(
  mapStateToProps,
  dispatch => ({getCharacter: (characterId) => dispatch(getCharacter(characterId))})
)(Detail);
