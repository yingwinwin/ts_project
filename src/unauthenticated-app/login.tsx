import { Button, Card, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

const Login = () => {
  const { login } = useAuth();
  const onSubmit = ({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) => {
    login({ username, password });
  };

  return (
    <Card>
      <Form onFinish={onSubmit}>
        <Form.Item name="username" label="用户名">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input type="password" />
        </Form.Item>
        <div>
          <Button htmlType="submit" type="primary">
            登录
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default Login;
