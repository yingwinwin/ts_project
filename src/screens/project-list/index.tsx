import List from "./list";
import SearchPanel from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObj } from "utils";
import useDebounce from "./useDebounce";
import { useHttp } from "utils/http";
import useMount from "./useMount";
import styled from "@emotion/styled";

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
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;
