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
  EMPTY: "EMPTY",
  SIGNUP : "SIGNUP",
  LOGIN : "LOGIN",
  FORGETPASSWORD : "FORGETPASSWORD",
};

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: MODAL.EMPTY,
    };

    // this.handleSignUpClick = this.handleSignUpClick.bind(this);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleLoginClickFromSignUp = this.handleLoginClickFromSignUp.bind(this);
    // this.handleSignUpClickFromLogin = this.handleSignUpClickFromLogin.bind(this);
    // this.handleForgetPassword = this.handleForgetPassword.bind(this);
  }

  handleCurrentModal(currentModal) {
    this.setState({
      currentModal: currentModal,
    })
  }

  // handleSignUpClick(event) {
  //   event.preventDefault();

  //   this.setState({
  //     currentModal: MODAL.SIGNUP,
  //   });
  // }

  // handleLoginClick(event) {
  //   event.preventDefault();

  //   this.setState({
  //     currentModal: MODAL.LOGIN,
  //   });
  // }

  // handleForgetPassword(event) {
  //   event.preventDefault();

  //   this.setState({
  //     currentModal: MODAL.FORGETPASSWORD,
  //   });
  // }

  // handleLoginClickFromSignUp(event) {
  //   event.preventDefault();

  //   this.setState({
  //     currentModal: MODAL.LOGIN,
  //   });
  // }

  // handleSignUpClickFromLogin(event) {
  //   event.preventDefault();

  //   this.setState({
  //     currentModal: MODAL.SIGNUP,
  //   });
  // }

  handleCloseModal(currentModal) {
    this.setState({
      currentModal: currentModal,
    });
  }

  render() {
    const { currentModal } = this.state;
    
    return (
      <>
        <Layout>
          <HeaderItem>
            <Button size="sm" variant='nacked' onClick={() => this.handleCurrentModal(MODAL.SIGNUP)}>
              Sign Up
            </Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='nacked' onClick={() => this.handleCurrentModal(MODAL.LOGIN)}>Login in</Button>
          </HeaderItem>
          <HeaderItem>
            <Button size="sm" variant='secondary'>Become a Tasker</Button>
          </HeaderItem>
        </Layout>
        {currentModal === MODAL.SIGNUP && (
          <SignUpModal 
            onClose={() => this.handleCurrentModal(MODAL.EMPTY)}
            onLogin={() => this.handleCurrentModal(MODAL.LOGIN)}
          />
        )}
        {currentModal === MODAL.LOGIN && (
          <LoginModal 
            onClose={() => this.handleCurrentModal(MODAL.EMPTY)}
            onSignUp={() => this.handleCurrentModal(MODAL.SIGNUP)}
            onForgetPassword={() => this.handleCurrentModal(MODAL.FORGETPASSWORD)}
          />
        )}
        {currentModal === MODAL.FORGETPASSWORD && (
          <ForgetPasswordModal 
            onClose={() => this.handleCurrentModal(MODAL.EMPTY)}
          />
        )}
      </>
    )
  }
}

export default Auth;
