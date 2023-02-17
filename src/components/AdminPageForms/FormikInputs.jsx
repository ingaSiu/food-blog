import { Field, ErrorMessage } from 'formik';
import Input from '../Input';
import { Textarea, Select } from '../Input';

export const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Input} {...rest} />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export const FormikTextarea = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Textarea} {...rest} />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export const FormikSelect = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Select} {...rest} />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};
