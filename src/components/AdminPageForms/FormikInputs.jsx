import { Field, ErrorMessage } from 'formik';

export const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};
