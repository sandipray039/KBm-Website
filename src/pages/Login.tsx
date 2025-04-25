import React, { useState } from "react";
import { login } from "../Services/ApiService";
import { useNavigate } from "react-router-dom";

interface LoginData {
  UserName: string;
  Password: string;
};

const Login: React.FC = () => {
  const [Name, setUserName] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const navigate = useNavigate();

  const validateUserName = (username: string) => {
    if (username.length < 3 || /\s/.test(username)) {
      setUsernameError("Username must be at least 3 characters and contain no spaces.");
      return false;
    }
    setUsernameError("");
    return true;
  };

  const validatePassword = (password: string) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const startsWithCapital = /^[A-Z]/.test(password);
    if (password.length < 6 || !hasSpecialChar || !startsWithCapital) {
      setPasswordError("Password must start with a capital letter, be at least 6 characters, and contain a special character.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isUsernameValid = validateUserName(Name);
    const isPasswordValid = validatePassword(Password);

    if (!isUsernameValid || !isPasswordValid) {
      return;
    }

    const data: LoginData = {
      UserName: Name,
      Password: Password,
    };

    try {
      const response = await login(data);
      if (response.isSuccess) {
        navigate('/tablepage');
      } else {
        setSubmitError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      setSubmitError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: 'aqua',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh'
        }}
      >
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
              <div className="mb-4">
                <label className="form-label">
                  UserName <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={Name}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setUsernameError(""); // Clear on change
                  }}
                  onBlur={() => validateUserName(Name)}
                 
                />
                {usernameError && <p className="text-danger" style={{ marginTop: "5px" }}>{usernameError}</p>}
              </div>
              <div className="mb-4">
                <label className="form-label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(""); // Clear on change
                  }}
                  onBlur={() => validatePassword(Password)}
           
                />
                {passwordError && <p className="text-danger" style={{ marginTop: "5px" }}>{passwordError}</p>}
              </div>

              {submitError && <p className="text-danger">{submitError}</p>}
<div className="text-center">
<button type="submit" className="btn btn-primary w-100 mt-5" style={{textAlign: 'center'}}>
                Login
              </button>
</div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
