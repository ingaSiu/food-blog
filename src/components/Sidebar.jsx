import {
  SidebarContainer,
  SmallWrapper,
  SidebarTitle,
  SideText,
  Greeting,
  InputEmail,
  SideBtn,
  CategoriesContainer,
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
          <p>
            I'm Inga and this is space for enjoying and creating good food at home. <br />
            This blog is about my obsession with food and interesting expierences.
          </p>
        </SideText>
      </SmallWrapper>

      <SmallWrapper>
        <SidebarTitle>Categories</SidebarTitle>
        <CategoriesContainer>
          {categories.map((item) => (
            <p key={item._id}> &#62; {item.title}</p>
          ))}
        </CategoriesContainer>
      </SmallWrapper>

      <SmallWrapper>
        <SidebarTitle>Newsletter</SidebarTitle>
        <SideText>
          <p>Interested and don't want to miss new content? Subscribe to newsletter</p>
        </SideText>
        <InputEmail />
        <SideBtn>I want!</SideBtn>
      </SmallWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
