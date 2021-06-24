import {useState} from 'react';
import list from './data/list.json'
import BigList from './cmps/BigList'

import './styles.css'

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const onCounterClick = () => {
    setCount(count + 1)
    console.log('You clicked on counter ', count);
  }

  return (
    <BigList
      items={list}
      counter={count}
      onCounterClick={onCounterClick}
    />
  );
}