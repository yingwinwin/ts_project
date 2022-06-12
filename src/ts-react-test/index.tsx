import useArray from "./useArray"

interface Person {
    name: string,
    age: string
}

const persons: Person[] = [{
    name: 'jack', age: '12',
}, {
    name: 'ma', age: '14',
}]


const TsReactTest = () => {
    const { value, add, remove, clear } = useArray(persons)

    return <div>
        <button onClick={() => add({
            "name": 'jack',
            "age": '18'
        })}>添加</button>
        <button onClick={() => remove(0)}>删除</button>
        <button onClick={clear}>清除</button>
        <ul>
            {
                value.map((person, i) => <li key={i}>{person.name}</li>)
            }
        </ul>
    </div>
}

export default TsReactTest