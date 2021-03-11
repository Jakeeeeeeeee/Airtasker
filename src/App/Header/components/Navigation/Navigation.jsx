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

  &:hover {
    color: gray;
  }
`;

const Toggler = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const Navigation = () => (
    <Layout>
      <HeaderItem>
        <Button variant='primary'>Post a task</Button>
      </HeaderItem>
      <HeaderItem highlight>
        <Toggler>
          Categories
        </Toggler>
      </HeaderItem>
      <HeaderItem highlight>
        <Link href="/tasks">Browse tasks</Link>
      </HeaderItem>
      <HeaderItem highlight>
        <Link href="/faq">How it works</Link>
      </HeaderItem>
    </Layout>
);

export default Navigation;