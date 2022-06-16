import { useAuth } from "context/auth-context";
import { Button, Card, Form, Input } from "antd";

const RegisterScreen = () => {
  const { register } = useAuth();
  const onSubmit = ({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) => {
    register({ username, password });
  };

  return (
    <Card>
      <Form onFinish={onSubmit}>
        <Form.Item name="username">
          <Input type="text" placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password">
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <div>
          <Button htmlType="submit" type="primary">
            注册
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default RegisterScreen;
