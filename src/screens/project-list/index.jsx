import List from "./list"
import SearchPanel from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObj } from 'utils';
import qs from 'qs';
import useDebounce from "./useDebounce";

const apiUrl = process.env.REACT_APP_API_URL

const ProjectList = () => {
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const debounceParam = useDebounce(param, 500);
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects/?${qs.stringify(cleanObj(debounceParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json());
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        })
    })


    return <div>
        <SearchPanel param={param} setParam={setParam} users={users} />
        <List users={users} list={list} />
    </div>
}
export default ProjectList;

const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}