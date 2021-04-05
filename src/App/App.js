import Header from "./Header";
import styled from 'styled-components';
import MainBody from "./MainBody/MainBody";

const Layout = styled.div`
  display: block;
`;

function App() {
  return (
    <Layout>
      <Header />
      <MainBody />
    </Layout>
  );
}

export default App;
