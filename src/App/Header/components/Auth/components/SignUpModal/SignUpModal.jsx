import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import FormItem from '../../../../../../components/FormItem';
import Input from '../../../../../../components/Input';
import validator from 'validator';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  font-weight: bold;
`;

const FORM = [
  { key: 'email', label: 'Email', type: 'text'},
  { key: 'password', label: 'Password', type: 'password'},
  { key: 'confirmPassword', label: 'ConfirmPassword', type: 'password'},
]

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formDirty: false,
      error: {
        email: "",
        password: "",
        confirmPassword: "",
      },
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
      }), () => {
        this.valid();
      });
    };
  }

  valid() {
    const { data } = this.state;

    FORM.forEach(({ key }) => this.hideErrorMessage(key, ""));


    if(!validator.isEmail(data.email)) {
      this.showErrorMessage('email', "Please input a valid Email !")
    }
    if(!data.email) {
      this.showErrorMessage('email', "Please input your email !");
    }

    
    if(!data.password) {
      this.showErrorMessage('password', "Please input your password !");
    }

    
    if(data.password !== data.confirmPassword) {
      this.showErrorMessage('confirmPassword', "Please confirm your password !")
    }
    if(!data.confirmPassword) {
      this.showErrorMessage('confirmPassword', "Please input your Password !");
    }
  }

  showErrorMessage = (key, errorMessage) => {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [key]: errorMessage,
      },
    }));
  }

  hideErrorMessage = (key) => {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        [key]: false,
      },
    }));
  }

  handleFormTouched() {
    this.setState({
      formDirty: true,
    })
  }

  render() {
    const { onClose, onLogin } = this.props;
    const { data, error, formDirty } = this.state;
  
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
              
              this.handleFormTouched();
              this.valid();

              console.log(data);
            }}
            >
              {FORM.map((form) => {
                const isError = error[form.key] && formDirty;

                return (
                  <FormItem key={form.key} label={form.label}>
                  <Input
                    type={form.type}
                    onChange={this.handleDataChange(form.key)}
                    error={isError} 
                  />
                  {isError && (
                    <ErrorMessage>
                      {error[form.key]}
                    </ErrorMessage>
                  )}
                </FormItem>
                  )
                } 
              )}
            
              <FormItem>
                <FullWidthButton variant="success" type="submit">Sign Up</FullWidthButton>
              </FormItem>
          </form>
      </Modal>
    </>
  );
}}



export default SignUpModal;