import {useState} from 'react'

const useArray = <T>(initValue: T[]) => {
    const [value, setValue] = useState(initValue);

    const add = (v: T) => {
        setValue([...value, v])
    }

    const remove = (index: number) => {
        setValue(value.filter((v, i) => i !== index))
    }

    const clear = () => setValue([])

    return {
        value,
        add,
        remove,
        clear
    };
}
export default useArray