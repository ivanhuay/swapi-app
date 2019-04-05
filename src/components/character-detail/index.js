import React from 'react';
import styles from './styles.module.css';
const CharacterDetail = ({character}) => (
  <div className={styles.root}>
    <h1>{character.name}</h1>
    <ul>
      <li>hair color: {character.hair_color}</li>
      <li>gender: {character.gender}</li>
      <li>height: {character.height}</li>
    </ul>
  </div>
);

export default CharacterDetail;
