import React, { Children,useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css"
import axios from "axios"

const Form = () => {
  
//   const response = axios.post('/api/register', {
// 	name: 'John Doe',
// });
//  console.log(response.data);

//  const form= document.querySelector("form")
//  if (form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     axios
//       .post("/update-profile", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
    
//   });
// }
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit=  async (e) =>{
  e.preventDefault();
  if(! (username && password)){
    console.log("Please fill out all fields.");
    return;
  }
  await axios
      .post(`https://nitmunbackend.lcnitd.co.in/login`, {
        username: username,
        password: password,
       
      })
      .then((res) => {
        window.location="/api/dashboard"
        console.log("Submitted, thank you!");
      })
}
  function loginFunction(){
    window.location= "/api/dashboard"
    console.log("Clicked")
  }
  return (
    <>
    <body>
      <div class="login-box">
        <h2>ADMIN</h2>
        <form class="form" onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label>Password</label>
          </div>
          {/* <a type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a> */}
          <button id="login" onClick={handleSubmit}>Payment Details</button>
        </form>
        
      </div>
    </body>
    </>
  );
};

export default Form;
