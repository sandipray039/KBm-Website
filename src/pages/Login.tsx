import React, { useState } from "react";
import { login } from "../Services/ApiService";
import {  useNavigate } from "react-router-dom";




interface LoginData {
  UserName: string;
  Password: string;
};

const Login: React.FC = () => {
  const [Name, setUserName] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate=useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: LoginData = {
      UserName: Name,
      Password: Password,
    };
    try {
        const response=await login(data);
        if(response.isSuccess){
            
            navigate('/tablepage');
        }

    } catch (err) {
        setError('Inavlid username or password,Please try again..');
    }
  };

  return (
   <div>
     <div
    className="container "
    style={{backgroundColor:'aqua', display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}
  >
       <div className="login-box col-md-3 col-sm-6 col-xs-12"  style={{backgroundColor:'white',height:'fit-content',padding:'7px 50px',borderRadius:'15px'}}>
        
      <div
        className=" p-4 "
        style={{ maxWidth: "400px", width: "100%" }}
      >
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
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100 mt-5">
          Login
        </button>
        </form>
       
      </div>
       </div>
    </div>
   </div>
  );
};

export default Login;
