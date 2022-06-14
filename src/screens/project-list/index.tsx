import List from "./list";
import SearchPanel from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObj } from "utils";
import qs from "qs";
import useDebounce from "./useDebounce";
import { useHttp } from "utils/http";
import useMount from "./useMount";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 500);
  const [users, setUsers] = useState([]);
  const http = useHttp();

  useEffect(() => {
    http("projects", { data: cleanObj(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    http("users", { data: cleanObj(debounceParam) }).then(setUsers);
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
export default ProjectList;
