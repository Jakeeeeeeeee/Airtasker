import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';
import Button from '../../../../components/Button';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Auth = () => (
  <Layout>
    <HeaderItem>
      <Button variant='nacked'>Sign Up</Button>
    </HeaderItem>
    <HeaderItem>
      <Button variant='nacked'>Login in</Button>
    </HeaderItem>
    <HeaderItem>
      <Button variant='secondary'>Become a Tasker</Button>
    </HeaderItem>
  </Layout>
);

export default Auth;