import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikInput } from './FormikInputs';
import ButtonMain from '../Button';
import styled from 'styled-components';
import { FormContainer } from './Form.styled';
import { BtnContainer } from './Form.styled';
import { useLogin } from '../../hooks/login';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_POSTS_PATH } from '../../routes/const';
const validationSchema = Yup.object().shape({
  key: Yup.string().required('Required'),
});

const LoginForm = () => {
  const { setAdmin } = useContext(AdminContext);
  const { mutateAsync: login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    login(values)
      .then(() => {
        alert('login success IN FORM');
        setAdmin(values.key);
        navigate(ADMIN_POSTS_PATH);
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          key: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyle>
            <h1>Enter admin key</h1>
            <FormikInput name="key" />

            <BtnContainer>
              <ButtonMain type="submit" disabled={isSubmitting}>
                Submit
              </ButtonMain>
            </BtnContainer>
          </FormStyle>
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
`;
