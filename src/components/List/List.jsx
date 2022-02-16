import React from 'react';
import Item from './Item';

export default function List({ items, onChange }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onChange={onChange} />
          </li>
        ))}
      </ul>
    </div>
  );
}
