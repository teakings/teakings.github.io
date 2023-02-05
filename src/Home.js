import './App.css';
import { useState, useEffect } from 'react';
import dbClass from './classes';
import logo from './img/logo.png';
import {Link, useNavigate } from "react-router-dom";


const Home = () => {
  const [username, setUsername] = useState("");
  const [pword, setPword] = useState("");
  const navigate = useNavigate();
  
  //CHECK SESSION
  const userIsActive = sessionStorage.getItem("username");
  useEffect(() => {
    if (userIsActive !== null) {
      navigate("/Dashboard");
    }
  })

  // LOGIN
  async function login(user) {
    let data= {
      type: "view",
      uname: user
    };
    const response = await fetch("https://teakings.000webhostapp.com/new/index.php", {
      method: 'post',
      mode: "cors",
      body: JSON.stringify(data)
    })
    const dbJSON = await response.json(); //get json
    if (dbJSON==="0") {
      console.log("null");
    }
    else {
      dbJSON.forEach(field => { // separate json
      sessionStorage.setItem("username",field.username);
      });
      navigate("/Dashboard")
    }
  }
  

  return (
    <div className="container">

      <div className='container-login100'>
      <div className="wrap-login100">
      <p className='h1 text-center fw-bolder'>Welcome <span id='head'></span></p>
      <img src={logo} alt="logo" className='img'/>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
      <input type="text" className='form-control' aria-describedby="emailHelp1" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div id="emailHelp1" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
      <input type="text" className='form-control' aria-describedby="emailHelp" value={pword} onChange={(e) => setPword(e.target.value)}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      
      <div className="d-grid gap-2">
      <button id='btn' className='btn btn-primary rounded-pill fw-bold' onClick={() => login(username)}>LOGIN</button>
      <button id='btn' className='btn btn-primary rounded-pill' onClick={() => dbClass.all()}>dis</button>
      </div>
      </div>
    </div>
    <li><Link to={`/Dashboard`}>Your Name</Link></li>

    </div> 
  );
}

export default Home;
