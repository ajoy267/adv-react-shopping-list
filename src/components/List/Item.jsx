import React, { useState } from 'react';

export default function Item({ item, handleEditItem, handleDelete }) {
  const [editing, setEditing] = useState(false);

  let itemContent;

  if (editing) {
    itemContent = (
      <div className="individual-item">
        <input
          value={item.text}
          onChange={(e) => {
            handleEditItem({
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
      <div className="individual-item">
        <p>{item.text}</p>
        <button type="button" onClick={() => setEditing(true)} aria-label={`Edit ${item.text}`}>
          Edit
        </button>
      </div>
    );
  }
  return (
    <div className="item">
      <input
        className="check"
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleEditItem({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button
        type="button"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.text}`}
      >
        Delete
      </button>
    </div>
  );
}
