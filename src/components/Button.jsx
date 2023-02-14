import { ButtonStyle } from './styles/Button.styled';

const ButtonMain = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default ButtonMain;
