import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import FormItem from '../../../../../../components/FormItem';
import Input from '../../../../../../components/Input';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUpModal = ({
  onClose,
  onLogin,
}) => (
    <Modal
      onClose={onClose}
      header="Sign Up"
      footer={(
        <Footer>
          <div>
            Already have an account?
          </div>
          <Button
            variant="link"
            onClick={onLogin}
          >
            Login
          </Button>
        </Footer>
      )}
      >
      <FormItem label="Email">
        <Input type="text" />
      </FormItem>
      <FormItem label="Password">
        <Input type="password" />
      </FormItem>
      <FormItem label="Confirm Password">
        <Input type="password"  />
      </FormItem>
      <FormItem>
        <FullWidthButton variant="success">Sign Up</FullWidthButton>
      </FormItem>
  </Modal>
);

export default SignUpModal;