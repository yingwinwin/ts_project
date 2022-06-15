import { Form, Input, Select } from "antd";
import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = ({ users, setParam, param }: SearchPanelProps) => {
  const handleChange = (e: string, name: string) => {
    setParam({
      ...param,
      [name]: e,
    });
  };

  return (
    <Form>
      <Input
        type="text"
        value={param.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value, "name")
        }
      />
      <Select
        value={param.personId}
        onChange={(v: string) => handleChange(v, "personId")}
      >
        <Select.Option value="">全部</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </Form>
  );
};
export default SearchPanel;
