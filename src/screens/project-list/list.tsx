import { Table } from "antd";
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
    <Table
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
        },
        {
          title: "负责人",
          dataIndex: "personId",
          render(_, record) {
            return (
              <span>
                {users.find((user) => record.personId === user.id)?.name}
              </span>
            );
          },
        },
      ]}
    />
  );
};
export default List;
