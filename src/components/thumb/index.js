import React from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const Thumb = ({film}) => (
  <Link to={`/detail/${film.episode_id}`} className={styles.container} key={film.episode_id}>
    <img src={`/thumbs/${film.episode_id}.jpg`} alt={film.episode_id} className={styles.thumb}/>
    <p className={styles.title}>
      {film.title}
    </p>
  </Link>
);

export default Thumb;
