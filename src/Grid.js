import React from 'react';
import './Grid.css';
import Thumb from './Thumb';
const Grid = ({films}) => (
  <div className="grid-wrapper">
    {
      films.map((film, index) => {
        return <Thumb key={film.episode_id} film={film}/>
      })
    }
  </div>
);

export default Grid;
