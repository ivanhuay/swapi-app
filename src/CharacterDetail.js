import React from 'react';
import './CharacterDetail.css';
const CharacterDetail = ({character}) => (
  <div className="character-data">
    <h1>{character.name}</h1>
    <ul>
      <li>hair color: {character.hair_color}</li>
      <li>gender: {character.gender}</li>
      <li>height: {character.height}</li>
    </ul>
  </div>
);

export default CharacterDetail;
