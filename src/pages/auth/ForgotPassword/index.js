import { useState } from "react";
import { auth } from "../../../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_Forgot_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setLoading(false);
        setEmail("");
        alert("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error?.message);
      });
  };

  const forgotPasswordForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoFocus
        />
        <button type="submit" disabled={!email}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    );
  };
  return (
    <div>
      <h4>Forgot Password</h4>
      {forgotPasswordForm()}
    </div>
  );
};

export default ForgotPassword;
