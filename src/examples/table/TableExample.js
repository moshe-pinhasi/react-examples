import {useState} from 'react'

// import list from './data/sm_data.json'
import list from './data/data.json'

import SearchInput from './cmps/SearchInput'
import ItemTable from './cmps/ItemTable'

import './styles.css'

const PAGE = 100

export default function TableExample() {
  const makePage = (items) => items.slice(0, PAGE)

  const [term, setTerm] = useState('');

  const [items, setItems] = useState(makePage(list));

  const onSearch = (event) => {
    console.log('onSearch', event.target.value)
    setTerm(event.target.value)

    const term = event.target.value.toLocaleLowerCase()
    const currItems = list.filter(item => {
      // console.log(item.name)
      return item.name && item.name.toLocaleLowerCase().includes(term)
    })
    setItems(makePage(currItems))
  }

  return (
    <div className="table-example">
      <div className="header">
        <SearchInput term={term} handleChange={onSearch}/>
        <div>displaying {items.length} of {list.length} [max display: {PAGE}]</div>
      </div>
      <ItemTable items={items}/>

      {/* <table className="table-container">
        <thead>
          <tr>
            <th>name</th>
            <th>company</th>
            <th>email</th>
            <th>active</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.isActive}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */}

    </div>
  );
}