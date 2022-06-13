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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string
  ) => {
    setParam({
      ...param,
      [name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, "name")
        }
      />
      <select
        name=""
        id=""
        value={param.personId}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange(e, "personId")
        }
      >
        <option value="">全部</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SearchPanel;
