import styled from 'styled-components';
import Auth from './components/Auth';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

const StyleHeader = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;

const Layout = styled.div`
  display: flex;
  align-items:  stretch;
  width: 1280px;
  margin: auto;
`;

const Header = () => (
  <StyleHeader>
    <Layout>
      <Logo />  
      <Navigation />
      <Auth />
    </Layout>
  </StyleHeader>
    
);

export default Header;