import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../contexts/CategoryContext';
import { FormikInput } from './FormikInputs';
import ButtonMain from '../Button';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  imageUrl: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('Please enter website'),
  content: Yup.string().required('Required'),
  categoryId: Yup.string().required('Required. Please choose a category'),
});

const CreateNewPost = () => {
  const { categories } = useContext(CategoryContext);
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
          <FormStyle>
            <h1>Create a new post</h1>
            <FormikInput name="title" placeholder="Post title" />
            <FormikInput name="imageUrl" placeholder="Main image URL" />
            <FormikInput as="textarea" name="content" placeholder="Write post content" />
            <FormikInput as="select" name="categoryId">
              <option value="">Choose a category </option>
              {categories &&
                categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
            </FormikInput>

            <ButtonMain type="submit" disabled={isSubmitting}>
              Submit
            </ButtonMain>
          </FormStyle>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewPost;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
  border: 1px solid grey;
`;
