import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormikInput } from './FormikInputs';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  imageUrl: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Please enter website'),
  content: Yup.string().required('Required'),
  categoryId: Yup.string().required('Required'),
});

const CreateNewPost = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 2000);
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          imageUrl: '',
          content: '',
          categoryId: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Create a new post</h1>
            <FormikInput name="title" placeholder="Post title" />
            <FormikInput name="imageUrl" placeholder="Main image URL" />
            <FormikInput type="textarea" name="content" placeholder="Write post content" />
            <FormikInput type="textarea" name="categoryId" placeholder="Write category ID " />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewPost;
