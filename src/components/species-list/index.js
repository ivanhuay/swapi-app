import React, {Component} from 'react';
import {Loading} from '../../components';
export default class SpeciesList extends Component{
    constructor(props){
      super(props);
      this.state = {
        speciesUrls: props.species,
        species : [],
        loading: true
      }
    }
    componentDidUpdate(prevProps){
      if(prevProps.species !== this.props.species){
        this.setState({speciesUrls:this.props.species, loading:true})
          .then(()=>{
            this.getSpeciesInfo();
          })
      }
    }
    componentDidMount(){
      this.getSpeciesInfo();
    }
    getSpeciesInfo(){
        const requests = this.state.speciesUrls.map((url)=>{
          return fetch(url)
            .then((response)=>{
              return response.json();
            })
        });
        return Promise.all(requests)
          .then((species) => {
            this.setState({species, loading: false});
          })
    }
    render(){
      return <div className="characters-list">
        {this.state.loading ? <Loading/> : <ul>
          {this.state.species.map((specie)=>(
            <li key={specie.name}>{specie.name}</li>
          ))}
        </ul>}
      </div>
    }
}
