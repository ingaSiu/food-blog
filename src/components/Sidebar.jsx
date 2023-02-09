import {
  SidebarContainer,
  SmallWrapper,
  SidebarTitle,
  SideText,
  Greeting,
  InputEmail,
  SideBtn,
} from './styles/Sidebar.styled';
import logo from '../assets/images/logo.png';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SmallWrapper>
        <SidebarTitle>About me</SidebarTitle>
        <img src={logo} alt="Black Cat" />
        <SideText>
          <Greeting>Hi there!</Greeting>
          I'm Inga and this is space for celebrating and creating good food at home. <br />
          This blog is about my obsession with food and interesting expierences.
        </SideText>
      </SmallWrapper>

      <SmallWrapper>
        <SidebarTitle>Categories</SidebarTitle>
        <SideText>here to map category.title</SideText>
      </SmallWrapper>

      <SmallWrapper>
        <SidebarTitle>Newsletter</SidebarTitle>
        <SideText>Interested and don't want to miss new content? Subscribe to newsletter</SideText>
        <InputEmail />
        <SideBtn>I want!</SideBtn>
      </SmallWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
