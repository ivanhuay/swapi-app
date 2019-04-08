import React, {Component} from 'react';
import {Loading} from '../../components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDetails} from '../../actions/character';

class CharacterList extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.characters !== this.props.characters) {
      this.getCharacterInfo();
    }
  }
  componentDidMount() {
    this.getCharacterInfo();
  }
  getCharacterInfo() {
    this.props.getDetails(this.props.characters)
  }
  render() {
    return <div className="characters-list">
      {
        this.props.loadingDetails
          ? <Loading/>
          : <ul>
              {
                this.props.details.map((character) => (<li key={character.name}>
                  <Link to={`/character/${character.url.match(/\d+/)[0]}`}>{character.name}</Link>
                </li>))
              }
            </ul>
      }
    </div>
  }
}


function mapStateToProps(state) {
  return {
    details: state.character.details,
    loadingDetails: state.character.detailsLoading,
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
      return {
        getDetails: (urls) => {dispatch(getDetails(urls))}
      }
  })(CharacterList);
