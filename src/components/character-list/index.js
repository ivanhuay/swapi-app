import React, {Component} from 'react';
import {Loading} from '../../components';
import {Link} from 'react-router-dom';
export default class CharacterList extends Component{
    constructor(props){
      super(props);
      this.state = {
        characterUrls: props.characters,
        characters : [],
        loading: true
      }
    }
    componentDidUpdate(prevProps){
      if(prevProps.characters !== this.props.characters){
        this.setState({characterUrls:this.props.characters, loading:true})
          .then(()=>{
            this.getCharacterInfo();
          })
      }
    }
    componentDidMount(){
      this.getCharacterInfo();
    }
    getCharacterInfo(){
        const requests = this.state.characterUrls.map((url)=>{
          return fetch(url)
            .then((response)=>{
              return response.json();
            })
        });
        return Promise.all(requests)
          .then((characters) => {
            this.setState({characters, loading: false});
          })
    }
    render(){
      return <div className="characters-list">
        {this.state.loading ? <Loading/> : <ul>
          {this.state.characters.map((character)=>(
            <li key={character.name}><Link to={`/character/${character.url.match(/\d+/)[0]}`}>{character.name}</Link></li>
          ))}
        </ul>}
      </div>
    }
}
