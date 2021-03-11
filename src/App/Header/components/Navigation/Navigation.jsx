import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';
import Button from '../../../../components/Button';

const Layout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Toggler = styled.div`
  cursor: pointer;
`;

const Navigation = () => (
    <Layout>
      <HeaderItem>
        <Button variant='primary'>Post a task</Button>
      </HeaderItem>
      <HeaderItem highlight as={Toggler}>
          Categories
      </HeaderItem>
      <HeaderItem highlight as={Link} href="/tasks">
        Browse tasks
      </HeaderItem>
      <HeaderItem highlight as={Link} href="/faq">
        How it works
      </HeaderItem>
    </Layout>
);

export default Navigation;