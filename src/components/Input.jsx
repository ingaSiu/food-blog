import { InputStyle, TextareaStyle, SelectStyle } from './styles/Input.styled';

const Input = (props) => {
  return <InputStyle {...props} />;
};

export default Input;

export const Textarea = (props) => {
  return <TextareaStyle {...props} />;
};

export const Select = (props) => {
  return <SelectStyle {...props} />;
};
