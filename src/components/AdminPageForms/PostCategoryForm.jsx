import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { FormikInput } from './FormikInputs';
import ButtonMain from '../Button';
import { FormBackground, FormContainer, CloseBtnContainer, CloseBtn, BtnContainer } from './Form.styled';
import { useCategoryInsert } from '../../hooks/categories';
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

const CreateNewCategory = ({ closeForm }) => {
  const { mutateAsync: createCategory } = useCategoryInsert();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('SUBMIT POST');
    console.log(values);
    createCategory(values)
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
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormStyle>
              <h1>Create a new post</h1>
              <FormikInput name="title" placeholder="Category title" />

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

export default CreateNewCategory;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
`;
