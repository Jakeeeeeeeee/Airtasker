import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import FormItem from '../../../../../../components/FormItem';
import Input from '../../../../../../components/Input';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const ForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginModal = ({
  onClose,
  onSignUp,
  onForgetPassword,
}) => (
    <Modal 
      onClose={onClose}
      header="Log in"
      footer={(
        <Footer>
          <div>
            Don't have an account?
          </div>
          <Button 
            variant="link"
            onClick={onSignUp}
          >
            Sign up
          </Button>
        </Footer>
      )}>
      <form>
        <FormItem label="Email">
          <Input type="text" />
        </FormItem>
        <FormItem label="Password">
          <Input type="password" />
        </FormItem>
        <FormItem>
          <ForgetPasswordContainer>
            <Button onClick={onForgetPassword} variant="link">Forget Password?</Button>
          </ForgetPasswordContainer>
        </FormItem>
        <FormItem>
          <FullWidthButton variant="success">Login in</FullWidthButton>
        </FormItem>
      </form>
    </Modal>
);

export default LoginModal;