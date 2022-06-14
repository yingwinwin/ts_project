import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

const RegisterScreen = () => {
  const { register } = useAuth();
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">
        用户名
        <input name="username" type="text" />
      </label>
      <label htmlFor="">
        密码
        <input name="password" type="password" />
      </label>
      <div>
        <button>注册</button>
      </div>
    </form>
  );
};

export default RegisterScreen;
