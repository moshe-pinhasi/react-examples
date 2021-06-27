import React, { useCallback } from 'react'
import ItemPreview from './ItemPreview'

const collections = new Set();

function BigList({ items, counter, onCounterClick }) {
  console.log('BigList rendered!')

  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, []);
  
  // const onItemClick = (event) => {
  //   console.log('You clicked ', event.currentTarget);
  // };
    
  collections.add(onItemClick)
  console.log('collections', collections.size)

  const renderList = item => <ItemPreview item={item} key={item.id} onItemClick={onItemClick} />

  return (
    <div>
      <button className="counter" onClick={onCounterClick}>counter: {counter}</button>
      <div>{items.map(renderList)}</div>
    </div>
  );
}

export default React.memo(BigList);
// export default BigList;