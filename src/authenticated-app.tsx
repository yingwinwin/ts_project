import { useAuth } from "context/auth-context";
import ProjectList from "screens/project-list";
import { Button } from "antd";

const AuthenticatenApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>登出</Button>
      <ProjectList />
    </div>
  );
};

export default AuthenticatenApp;
