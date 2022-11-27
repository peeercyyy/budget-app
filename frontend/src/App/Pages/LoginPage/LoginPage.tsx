import { Link } from "react-router-dom";
import { LoginDescription } from './Components/LoginDescription';
import { LoginForm } from './Components/LoginForm';
import { LoginTitle } from './Components/LoginTitle';

export const LoginPage = () => {
  return (
    <div className="login_page">
      <Link to="/">Main Page</Link>
      <LoginTitle />
      <LoginDescription />
      <LoginForm />
    </div>
  );
};
