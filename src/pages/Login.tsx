import React, { useState } from "react";
import { login } from "../Services/ApiService";
import { useNavigate } from "react-router-dom";

interface LoginData {
  UserName: string;
  Password: string;
}

const Login: React.FC = () => {
  const [Name, setUserName] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const navigate = useNavigate();

  const validatePassword = (password: string): string => {
    const errors: string[] = [];
  
    if (password.length < 6) {
      errors.push("• At least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("• One uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("• One lowercase letter");
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      errors.push("• One special character");
    }
  
    return errors.length > 0 ? `Password must have:\n${errors.join("\n")}` : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setNameError("");
    setPasswordError("");

    let isValid = true;

    if (!Name.trim()) {
      setNameError("Username is required.");
      isValid = false;
    }

    const pwdError = validatePassword(Password);
    if (pwdError) {
      setPasswordError(pwdError);
      isValid = false;
    }

    if (!isValid) return;

    const data: LoginData = {
      UserName: Name,
      Password: Password,
    };

    try {
      const response = await login(data);
      if (response.isSuccess) {
        navigate('/tablepage');
      } else {
        setError("Invalid username or password, please try again.");
      }
    } catch (err) {
      setError("Invalid username or password, please try again.");
    }
  };

  return (
    <div className="container"
      style={{
        backgroundColor: 'aqua',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>
      <div className="login-box col-md-3 col-sm-6 col-xs-12"
        style={{
          backgroundColor: 'white',
          height: 'fit-content',
          padding: '7px 50px',
          borderRadius: '15px'
        }}>
        <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">UserName <span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                className="form-control"
                value={Name}
                onChange={(e) => setUserName(e.target.value)}
              />
              {nameError && <div className="text-danger mt-1">{nameError}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password <span style={{ color: "red" }}>*</span></label>
              <input
                type="password"
                className="form-control"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
            </div>

            {error && <p className="text-danger mt-3">{error}</p>}

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
