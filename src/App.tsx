import AuthenticatenApp from "authenticated-app";
import { useAuth } from "context/auth-context";
import UnauthenticatenApp from "unauthenticated-app";
import "./App.less";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatenApp /> : <UnauthenticatenApp />}
    </div>
  );
}

export default App;
