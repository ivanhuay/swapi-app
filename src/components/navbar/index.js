import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import React from 'react';
const NavBar = (props)=>(
  <div className={styles.root}>
    <div className={styles.menu}><i className='material-icons'>menu</i></div>
    <li><Link to='/'>Home</Link></li>
  </div>
);

export default NavBar;
