import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { FormikInput, FormikTextarea } from './FormikInputs';
import ButtonMain from '../Button';
import { FormContainer } from './Form.styled';
import { useCreateComment } from '../../hooks/comments';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

const PostComment = ({ postId }) => {
  const { mutateAsync: createComment } = useCreateComment();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('SUBMIT COM');
    console.log(values);
    const commentValues = { ...values, postId: postId };
    createComment(commentValues)
      .then(() => {
        setSubmitting(false);
        resetForm();
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          userName: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyle>
            <h1>Write a comment</h1>
            <FormikInput name="userName" placeholder="Please write your name" />
            <FormikTextarea name="content" placeholder="Write your comment" />

            <ButtonMain type="submit" disabled={isSubmitting}>
              Submit
            </ButtonMain>
          </FormStyle>
        )}
      </Formik>
    </FormContainer>
  );
};

export default PostComment;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
`;
