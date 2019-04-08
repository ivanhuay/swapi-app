import React from 'react';
import styles from './styles.module.scss';
import {Thumb} from '../../components';
const Grid = ({films}) => (
  <div className={styles.root}>
    {
      films.map((film) => {
        return <Thumb key={film.episode_id} film={film}/>
      })
    }
  </div>
);

export default Grid;
