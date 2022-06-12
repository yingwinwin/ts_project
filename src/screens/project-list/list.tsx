import { User } from "./search-panel";

interface IList {
  id: string;
  name: string;
  personId: string;
}

interface ListPorps {
  list: IList[];
  users: User[];
}

const List = ({ list, users }: ListPorps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find((user) => project.personId === user.id)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default List;
