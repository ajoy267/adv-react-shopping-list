import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import './Shopping.css';

export default function Shopping() {
  return (
    <div>
      <Header />
      <AddItem />
      <List />
    </div>
  );
}
