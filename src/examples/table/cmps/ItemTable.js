import ItemRow from "./ItemRow";


export default function ItemTable({items}) {
  const renderRows = item => <ItemRow item={item} key={item._id} />
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>name</th>
          <th>company</th>
          <th>email</th>
          <th>active</th>
        </tr>
      </thead>

      <tbody>
        {items.map(renderRows)}
      </tbody>
    </table>
  );
}