import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../../../firebase";

import { roleBasedRedirect } from "../../../functions/auth";
import { login } from "../../../store/actions/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, role } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch(login(idTokenResult.token));
      roleBasedRedirect(role, navigate);
    } catch (error) {
      console.log(error);
      alert(error?.message);
    }
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();

    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        dispatch(login(idTokenResult.token));
        roleBasedRedirect(role, navigate);
      })
      .catch((error) => {
        console.log(error);
        alert(error?.message);
      });
  };

  const loginForm = () => {
    return (
      <form /* onSubmit={handleSubmit} */>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button disabled={!email || password.length < 6} onClick={handleSubmit}>
          {isLoading ? "Loading..." : "Login with Email&Password"}
        </button>
        <button onClick={handleLoginWithGoogle}>Login with Google</button>
        <Link to="/forgot/password">Forgot password</Link>
      </form>
    );
  };

  return (
    <div>
      <h4>Login</h4>
      {loginForm()}
    </div>
  );
};

export default Login;
