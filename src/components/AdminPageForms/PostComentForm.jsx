import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { FormikInput, FormikTextarea } from './FormikInputs';

import ButtonMain from '../Button';
import { CommentFormContainer } from './Form.styled';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
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
        toast.success('Comment posted!');
        resetForm();
      })
      .catch((error) => toast.error('Failed to post comment'));
  };

  return (
    <CommentFormContainer>
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
            <h2>Write a comment</h2>
            <FormikInput name="userName" placeholder="Please write your name" />
            <FormikTextarea name="content" placeholder="Write your comment" />

            <ButtonMain type="submit" disabled={isSubmitting}>
              Post Comment
            </ButtonMain>
          </FormStyle>
        )}
      </Formik>
    </CommentFormContainer>
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
