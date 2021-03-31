import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';
import Button from '../../../../components/Button';
import React from 'react';
import SignUpModal from './components/SignUpModal';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      currentModal: true,
    });
  }

  handleCloseModal() {
    this.setState({
      currentModal: false,
    });
  }

  render() {
    const { currentModal } = this.state;
    
    return (
      <>
        <Layout>
          <HeaderItem>
            <Button size="sm" variant='nacked' onClick={this.handleClick}>
              Sign Up
            </Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='nacked'>Login in</Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='secondary'>Become a Tasker</Button>
          </HeaderItem>
        </Layout>
        {currentModal && <SignUpModal onClose={this.handleCloseModal} />}
      </>
    )
  }
}

export default Auth;
