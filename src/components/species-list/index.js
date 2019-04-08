import React, {Component} from 'react';
import {Loading} from '../../components';
import {connect} from 'react-redux';
import {getSpecies} from '../../actions/character';

class SpeciesList extends Component{
    constructor(props){
      super(props);
      console.log(props);
    }
    componentDidUpdate(prevProps){
      if(prevProps.species !== this.props.species){
        this.props.getSpecies(this.props.species);
      }
    }
    componentDidMount(){
      this.props.getSpecies(this.props.species);
    }
    render(){
      return <div className="characters-list">
        {this.props.loading ? <Loading/> : <ul>
          {this.props.speciesData.map((specie)=>(
            <li key={specie.name}>{specie.name}</li>
          ))}
        </ul>}
      </div>
    }
}


function mapStateToProps(state) {
  return {
    speciesData: state.character.species,
    loading: state.character.speciesLoading,
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
      return {
        getSpecies: (urls) => {dispatch(getSpecies(urls))}
      }
  })(SpeciesList);
