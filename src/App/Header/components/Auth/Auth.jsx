import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const Auth = () => (
  <Layout>
    <HeaderItem>
      <Button>Sign Up</Button>
    </HeaderItem>
    <HeaderItem>
      <Button>Login in</Button>
    </HeaderItem>
  </Layout>
);

export default Auth;