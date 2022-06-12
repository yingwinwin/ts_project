const SearchPanel = ({
    users,
    setParam,
    param
}) => {

    const handleChange = (e, name) => {
        setParam({
            ...param,
            [name]: e.target.value,
        })
    }

    return <form>
        <input type="text" value={param.name} onChange={(e) => handleChange(e, 'name')} />
        <select name="" id="" value={param.personId} onChange={(e) => handleChange(e, 'personId')}>
            <option value="">全部</option>
            {
                users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))
            }
        </select>
    </form>
}
export default SearchPanel