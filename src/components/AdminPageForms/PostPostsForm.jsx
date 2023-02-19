import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FormikInput, FormikTextarea, FormikSelect } from './FormikInputs';
import ButtonMain from '../Button';
import { FormBackground, FormContainer, CloseBtnContainer, CloseBtn, BtnContainer } from './Form.styled';
import { usePostInsert } from '../../hooks/posts';
import { useAllCategoriesQuery } from '../../hooks/categories';

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

const CreateNewPost = ({ closeForm }) => {
  const { mutateAsync: createPost } = usePostInsert();
  const { data: categories } = useAllCategoriesQuery();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('SUBMIT POST');
    console.log(values);
    createPost(values)
      .then(() => {
        setSubmitting(false);
        resetForm();
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormBackground>
      <FormContainer>
        <CloseBtnContainer>
          <CloseBtn onClick={() => closeForm(false)}>X</CloseBtn>
        </CloseBtnContainer>
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
              <FormikTextarea name="content" placeholder="Write post content" />

              <FormikSelect name="categoryId">
                <option value="">Choose a category </option>
                {categories &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </FormikSelect>
              <BtnContainer>
                <ButtonMain type="submit" disabled={isSubmitting}>
                  Submit
                </ButtonMain>
              </BtnContainer>
            </FormStyle>
          )}
        </Formik>
      </FormContainer>
    </FormBackground>
  );
};

export default CreateNewPost;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
`;
