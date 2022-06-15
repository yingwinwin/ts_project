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
        <Form.Item name="username" label="用户名">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input type="password" />
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
