import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <body>
      <div class="login-box">
        <h2>ADMIN</h2>
        <form class="form" method="post" onSubmit={formik.handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label>Password</label>
          </div>
          <a type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </body>
  );
};

export default Form;
