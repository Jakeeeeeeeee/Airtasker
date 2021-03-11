import Header from "./Header";
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
`;

function App() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

export default App;
