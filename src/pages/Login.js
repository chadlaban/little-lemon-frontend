import React from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../assets/css/login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`login-form-container ${
        pathname === "/login" ? "primary" : ""
      }`}
    >
      <h2>Login</h2>
      <form
        onSubmit={formik.handleSubmit}
        className={`${pathname === "/login" ? "primary" : ""}`}
      >
        <div className="form-group">
          <label
            htmlFor="email"
            className={`${pathname === "/login" ? "input-label" : ""}`}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className={`${pathname === "/login" ? "input-label" : ""}`}
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
