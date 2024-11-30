import {Formik, Form, Field, ErrorMessage} from "formik";
import css from './ContactForm.module.css'
import * as Yup from "yup";

const ContactForm = ({addContact}) => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name must not exceed 50 characters")
            .required("Name is required"),
        number: Yup.string()
            .required("Number is required")
            .matches(/^\d+(-\d+)*$/, "Number can only contain digits and dashes, and dashes cannot be at the start or end"),
    });

    const handleSubmit = (values, {resetForm}) => {
        addContact(values.name, values.number);
        resetForm();
    };

    return (
        <Formik
            initialValues={{name: "", number: ""}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={css.form}>
                    <label className={css.label}>
                        Name:
                        <Field className={css.field} type="text" name="name"/>
                        <ErrorMessage className={css.validateMessage} name="name" component="div"/>
                    </label>
                    <label className={css.label}>
                        Number:
                        <Field className={css.field} type="text" name="number"/>
                        <ErrorMessage className={css.validateMessage} name="number" component="div"/>
                    </label>
                    <button type="submit">Add Contact</button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;