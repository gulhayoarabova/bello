import React from "react";
import hero from "../../assets/images/hero 1.svg";
import classes from "./Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
      console.log(formik.values);
      navigate("/successPage");
    },
  });


  console.log(formik.values);
  return (
    <div className={classes.form_wrapper}>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.left}>
            <h1>Let's get started</h1>
            {/* name input field */}
            <div className={classes.name_input}>
              <label
                htmlFor="name"
                className={`${formik.touched.name && formik.errors.name ? classes.red : ""
                  } `}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <p></p>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* email input field */}
            <div className={classes.email_input}>
              <label
                htmlFor="name"
                className={` ${formik.touched.name && formik.errors.email ? classes.red : ""
                  } `}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <p></p>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your email"
                onBlur={formik.handleBlur}
              />
            </div>
            {/* country select */}
            <div className={classes.select}>
              <label htmlFor="country"></label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>

            <div className={classes.term_wrapper}>
              <label
                htmlFor="terms"
                className={`${formik.touched.name && formik.errors.name ? classes.red : ""
                  } `}
              >
                {formik.touched.name && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms and Service"}
              </label>

              <div className={classes.checkbox_wrapper}>
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className={classes.terms_para}>
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button type="submit">Sign in</button>
          </div>
        </form>
        
        <div className={classes.img_wrap}>
          <img src={hero} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Login;
