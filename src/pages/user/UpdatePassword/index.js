import { useState } from "react";
import { auth } from "../../../firebase";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        alert("Password updated successfully");
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
        alert(error?.message);
      });
  };

  const updatePasswordForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter a new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={!password || password.length < 6 || loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    );
  };

  return (
    <div>
      <div>
        <h4>Update password</h4>
        {updatePasswordForm()}
      </div>
    </div>
  );
};

export default UpdatePassword;
