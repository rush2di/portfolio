import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Formy = ({ errors, touched, isSubmitting }) => {
  return (
    <div className="item-2">
      <div className="form-container">
        <Form className="form">
          <div className="notification stinfo">
            <div>{touched.name && errors.name && <p>{errors.name}</p>}</div>
            <div>{touched.email && errors.email && <p>{errors.email}</p>}</div>
            <div>
              {touched.message && errors.message && <p>{errors.message}</p>}
            </div>
          </div>
          <div className="stinfo">
            <Field type="text" name="name" placeholder="Name" />
            <Field type="email" name="email" placeholder="Email" />
          </div>
          <Field component="textarea" rows="2" type="text" name="message" />
          <button disabled={isSubmitting} type="submit">
            Send
          </button>
        </Form>
      </div>
    </div>
  );
};

const mapPropsToValues = ({ name, email, message }) => {
  return {
    name: name || "",
    email: email || "",
    message: message || ""
  };
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .email("not a valid email")
    .required("email is required"),
  message: Yup.string().required()
});

const handleSubmit = (values, { resetForm, setSubmitting }) => {
  setTimeout(() => {
    if (values.message.length < 5 || values.message === "") {
      console.log(values.message);
      alert("invalid message");
    } else {
      console.log("submited");
      resetForm();
      setSubmitting(false);
    }
  }, 1500);
};

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(Formy);
