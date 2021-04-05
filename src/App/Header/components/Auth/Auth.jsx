import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';
import Button from '../../../../components/Button';
import React from 'react';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import ForgetPasswordModal from './components/ForgetPasswordModal/ForgetPassword';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const MODAL = {
  SIGNUP : "SIGNUP",
  LOGIN : "LOGIN",
  FORGETPASSWORD : "FORGETPASSWORD",
};

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: false,
    };

    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLoginClickFromSignUp = this.handleLoginClickFromSignUp.bind(this);
    this.handleSignUpClickFromLogin = this.handleSignUpClickFromLogin.bind(this);
    this.handleForgetPassword = this.handleForgetPassword.bind(this);
  }

  handleSignUpClick(event) {
    event.preventDefault();

    this.setState({
      currentModal: MODAL.SIGNUP,
    });
  }

  handleLoginClick(event) {
    event.preventDefault();

    this.setState({
      currentModal: MODAL.LOGIN,
    });
  }

  handleForgetPassword(event) {
    event.preventDefault();

    this.setState({
      currentModal: MODAL.FORGETPASSWORD,
    });
  }

  handleLoginClickFromSignUp(event) {
    event.preventDefault();

    this.setState({
      currentModal: MODAL.LOGIN,
    });
  }

  handleSignUpClickFromLogin(event) {
    event.preventDefault();

    this.setState({
      currentModal: MODAL.SIGNUP,
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
            <Button size="sm" variant='nacked' onClick={this.handleSignUpClick}>
              Sign Up
            </Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='nacked' onClick={this.handleLoginClick}>Login in</Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='secondary'>Become a Tasker</Button>
          </HeaderItem>
        </Layout>
        {currentModal === MODAL.SIGNUP && (
          <SignUpModal 
            onClose={this.handleCloseModal}  
            onLogin={this.handleLoginClickFromSignUp} 
          />
        )}
        {currentModal === MODAL.LOGIN && (
          <LoginModal 
            onClose={this.handleCloseModal}
            onSignUp={this.handleSignUpClickFromLogin}
            onForgetPassword={this.handleForgetPassword} 
          />
        )}
        {currentModal === MODAL.FORGETPASSWORD && (
          <ForgetPasswordModal 
            onClose={this.handleCloseModal}
          />
        )}
      </>
    )
  }
}

export default Auth;
