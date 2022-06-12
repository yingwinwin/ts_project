import { useState, FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {

    const login = (param: {username: string, password: string}) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param)
        }).then(
            async (response) => {
                if (response.ok) {
                    // setList(await response.json());
                }
            }
        );
    }

    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const username = (evt.currentTarget.elements[0] as HTMLInputElement).value
        const password = (evt.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="">
            用户名
            <input name="username" type="text" />
        </label>
        <label htmlFor="">
            密码
            <input name="password" type="password" />
        </label>
        <div>
            <button>登录</button>
        </div>
    </form>
}

export default Login;