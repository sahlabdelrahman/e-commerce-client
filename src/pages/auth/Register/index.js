import { useState } from "react";
import { auth } from "../../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await auth
      .sendSignInLinkToEmail(email, config)
      .then((res) => {
        window.localStorage.setItem("emailForRegistration", email);
        alert(
          `Email is sent to ${email}. Click the link to complete your registration.`
        );
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <button type="submit">Register</button>
      </form>
    );
  };

  return (
    <div>
      <h4>Register</h4>
      {registerForm()}
    </div>
  );
};

export default Register;
