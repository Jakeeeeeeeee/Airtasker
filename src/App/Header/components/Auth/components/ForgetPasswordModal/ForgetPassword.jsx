import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import FormItem from '../../../../../../components/FormItem';
import Input from '../../../../../../components/Input';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ForgetPasswordModal = ({
  onClose,
}) => (
    <Modal 
      onClose={onClose}
      header="Forget Password?"
     >
      <form>
        <FormItem label="Email">
          <Input type="text" />
        </FormItem>
        <ButtonContainer>
          <Button variant="success" onClick={onClose}>cancel</Button>
          <Button variant="success">Send</Button>
        </ButtonContainer>
      </form>
    </Modal>
);

export default ForgetPasswordModal;