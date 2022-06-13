import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

const Login = () => {
    const { login, user } = useAuth()
    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const username = (evt.currentTarget.elements[0] as HTMLInputElement).value
        const password = (evt.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })
    }

    return <form onSubmit={onSubmit}>
        登录成功：{user?.name}
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