import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(50, "Name is too long")
      .required("Required"),
    number: Yup.string()

      .min(3, "Number is too short")
      .max(50, "Number is too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={s.form}>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
