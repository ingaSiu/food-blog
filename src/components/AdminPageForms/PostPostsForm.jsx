import * as Yup from 'yup';

import { BtnContainer, CloseBtn, CloseBtnContainer, FormBackground, FormContainer } from './Form.styled';
import { Form, Formik } from 'formik';
import { FormikInput, FormikSelect, FormikTextarea } from './FormikInputs';
import { useEditPost, usePostInsert } from '../../hooks/posts';

import ButtonMain from '../Button';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
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

const CreateNewPost = ({ closeForm, post, postId }) => {
  let initialValues = {
    title: '',
    imageUrl: '',
    content: '',
    categoryId: '',
  };

  if (post && postId) {
    initialValues = {
      title: post.title ? post.title : '',
      imageUrl: post.imageUrl ? post.imageUrl : '',
      content: post.content ? post.content : '',
      categoryId: post.categoryId ? post.categoryId : '',
    };
  }
  const { mutateAsync: createPost } = usePostInsert();
  const { mutateAsync: editPost } = useEditPost();
  const { data: categories } = useAllCategoriesQuery();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('SUBMIT POST');
    console.log(values);

    if (post && postId) {
      const postObj = { post: values };
      const postValues = { ...postObj, id: postId };
      console.log(postValues);
      editPost(postValues)
        .then((response) => {
          setSubmitting(false);
          console.log(response);
          closeForm(false);
          toast.success('Post edited succesfully');
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast.error('Session ended');
          }
          console.error('Failed to edit post');
          toast.error('Failed to edit post');
        });
    } else {
      createPost(values)
        .then(() => {
          setSubmitting(false);
          toast.success('New recipe post created!');
          closeForm(false);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          toast.error('Failed to create post');
        });
    }
  };

  return (
    <FormBackground>
      <FormContainer>
        <CloseBtnContainer>
          <CloseBtn onClick={() => closeForm(false)}>X</CloseBtn>
        </CloseBtnContainer>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormStyle>
              {post && postId ? <h1>Edit post</h1> : <h1>Create a new post</h1>}

              <FormikInput name="title" placeholder="Post title" />
              <FormikInput name="imageUrl" placeholder="Main image URL" />
              <FormikTextarea name="content" placeholder="Write post content" />

              <FormikSelect name="categoryId">
                <option value="">Choose a category </option>
                {categories &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id} selected={post && postId && item._id === post.categoryId}>
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
