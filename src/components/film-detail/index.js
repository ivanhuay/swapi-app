import React from 'react';
import styles from './styles.module.css';
import {CharacterList} from '../../components';
import {SpeciesList} from '../../components';
const FilmDetail = ({film}) =>(
  <div className={styles.root}>
    <h1>{film.title} - Episode {film.episode_id}</h1>
    <p>{film.opening_crawl}</p>
    <h3>Characters:</h3>
    <CharacterList characters={film.characters} />
    <h3>Species:</h3>
    <SpeciesList species={film.species} />
    <h3>Aditional information:</h3>
    <ul>
      <li>Director: {film.director}</li>
      <li>Producer: {film.producer}</li>
    </ul>
  </div>
);

export default FilmDetail;
