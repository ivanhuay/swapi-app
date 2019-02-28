import React from 'react';
import './FilmDetail.css';
import CharactersList from './CharactersList';
import SpeciesList from './SpeciesList';
const FilmDetail = ({film}) =>(
  <div className="film-data">
    <h1>{film.title} - Episode {film.episode_id}</h1>
    <p>{film.opening_crawl}</p>
    <h3>Characters:</h3>
    <CharactersList characters={film.characters} />
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
