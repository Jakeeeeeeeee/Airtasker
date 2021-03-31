import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../../../components/Button';


const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 400px;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  border-radius: 10px;
  padding: 24px 16px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 24px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 24px;
 `;

const FormItem = styled.div`
  & ~ & {
    margin-top: 16px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid rgb(187, 194, 220);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  height: 36px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.div`
  border-top: 1px solid rgb(187, 194, 220);
  margin-top: 24px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
`;

const SignUpModal = ({
  onClose,
}) => (
    <OverLay>
        <Container>
          <CloseButton onClick={onClose} variant="nacked">
            <FontAwesomeIcon size="lg" icon={faTimes} />
          </CloseButton>
          <Header>
            Join Us
          </Header>
          <FormItem>
            <Label>Email</Label>
            <Input type="text" />
          </FormItem>
          <FormItem>
            <Label>Password</Label>
            <Input type="password" />
          </FormItem>
          <FormItem>
            <Label>Confirm password</Label>
            <Input type="password"  />
          </FormItem>
          <FormItem>
            <SignUpButton variant="success">Sign Up</SignUpButton>
          </FormItem>
          <Footer>
            <div>
              Already have an account?
            </div>
            <Button variant="link">Login</Button>
          </Footer>
        </Container>
    </OverLay>
);

export default SignUpModal;