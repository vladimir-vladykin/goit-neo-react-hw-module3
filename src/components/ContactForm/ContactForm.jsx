import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  phone: "",
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onSubmitUserData }) => {
  const handleSubmit = (values, actions) => {
    onSubmitUserData(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={styles.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={styles.error} name="name" component="span" />

          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="phone" name="phone" id={phoneFieldId} />
          <ErrorMessage
            className={styles.error}
            name="phone"
            component="span"
          />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
