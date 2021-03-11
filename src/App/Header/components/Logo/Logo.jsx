import styled from 'styled-components';

const Layout =styled.div`
  display: flex;
  align-items: center;
  padding-right: 18px;
  border-right: 1px solid gray;
`;

const MyLogo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #008fb4;
`;

const Logo = () => (
    <Layout>
      <MyLogo>
        LOGO
      </MyLogo>
    </Layout>
);

export default Logo;