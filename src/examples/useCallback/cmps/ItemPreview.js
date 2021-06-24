import React from 'react'

function ItemPreview({item, onItemClick }) {
  return <div className="item-preview" onClick={onItemClick}>{item.name}</div>;
}

export default ItemPreview;