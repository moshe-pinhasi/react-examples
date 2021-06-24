export default function ItemRow({item}) {
  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.company}</td>
        <td>{item.email}</td>
        <td>{item.isActive}</td>
      </tr>
    </>
  );
}