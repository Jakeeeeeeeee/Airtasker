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

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  handleDataChange(key) {
    return ( event ) => {
      const dataToChange = {
        [key]: event.target.value,
      };

      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          ...dataToChange,
        },
      }));
    };
  }

  render() {
    const { onClose, onLogin } = this.props;
    const { data } = this.state;
  
   return (
     <>
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
          <form 
            onSubmit={(event) => {
              event.preventDefault();

              console.log(data);
            }}
            >
              <FormItem label="Email">
                <Input type="text" onChange={this.handleDataChange('email')} />
              </FormItem>
              <FormItem label="Password">
                <Input type="password" onChange={this.handleDataChange('password')}/>
              </FormItem>
              <FormItem label="Confirm Password">
                <Input type="password"  onChange={this.handleDataChange('confirmPassword')}/>
              </FormItem>
              <FormItem>
                <FullWidthButton variant="success" type="submit">Sign Up</FullWidthButton>
              </FormItem>
          </form>
      </Modal>
    </>
  );
}}



export default SignUpModal;