import "./App.css";
import { Home } from "./components/Home";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="562588632278-002jodt0tieoc295a925rgilklvkf04j.apps.googleusercontent.com"><Home /></GoogleOAuthProvider>
    </>
  );
};

export default App;
