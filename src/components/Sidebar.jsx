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

const Sidebar = ({ categories }) => {
  return (
    <SidebarContainer>
      <SmallWrapper>
        <SidebarTitle>About me</SidebarTitle>
        <img src={logo} alt="Black Cat" />
        <SideText>
          <Greeting>Hello there!</Greeting>
          I'm Inga and this is space for enjoying and creating good food at home. <br />
          This blog is about my obsession with food and interesting expierences.
        </SideText>
      </SmallWrapper>

      <SmallWrapper>
        <SidebarTitle>Categories</SidebarTitle>
        <div>
          {categories.map((item) => (
            <p key={item._id}>{item.title}</p>
          ))}
        </div>
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
