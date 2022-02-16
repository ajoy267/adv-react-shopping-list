import React, { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [editing, setEditing] = useState(false);

  let itemContent;

  if (editing) {
    itemContent = (
      <div>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
          aria-label={`Edit ${item.text}`}
        />
        <button type="button" onClick={() => setEditing(false)}>
          Save
        </button>
      </div>
    );
  } else {
    itemContent = (
      <div>
        <p>{item.text}</p>
        <button type="button" onClick={() => setEditing(true)} aria-label={`Edit ${item.text}`}>
          Edit
        </button>
      </div>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onChange({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)} aria-label={`Delete ${item.text}`}>
        Delete
      </button>
    </div>
  );
}
