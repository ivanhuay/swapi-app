import React from 'react';
import './Thumb.css';
import {Link} from 'react-router-dom';

const Thumb = ({film}) => (
  <Link to={`/detail/${film.episode_id}`} className="thumb-container" key={film.episode_id}>
    <img src={`/thumbs/${film.episode_id}.jpg`} alt={film.episode_id} className="thumb"/>
    <p className="thumb-title">
      {film.title}
    </p>
  </Link>
);

export default Thumb;
