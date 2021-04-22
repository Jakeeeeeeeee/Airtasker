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

// const FORM = [
//   { key: 'email', label: 'Email', type: 'text'},
//   { key: 'password', label: 'Password', type: 'password'},
//   { key: 'confirmPassword', label: 'ConfirmPassword', type: 'password'},
// ]

const FORM = {
  email: {
    label: 'Email',
    type: 'text',
    validations: [{
      valid: (data) => validator.isEmail(data.email),
      errorMessage: 'Please input a valid Email !',
    }, {
      valid: (data) => !!data.email,
      errorMessage: 'Please input your email !',
    }]
  },
  password: {
    label: 'Password', 
    type: 'password',
    validations: [{
      valid: (data) => !!data.password,
      errorMessage: 'Please input your password !',
    }]
  },
  confirmPassword: {
    label: 'ConfirmPassword', 
    type: 'password',
    validations: [{
      valid: (data) => data.password === data.confirmPassword,
      errorMessage: 'Please confirm your password !',
    }, {
      valid: (data) => !!data.confirmPassword,
      errorMessage: 'Please input your Password !',
    }],
  },
}

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formDirty: false,
      // error: {
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      // },
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

  getError() {
    const { data } = this.state;

    // FORM.forEach(({ key }) => this.hideErrorMessage(key, ""));

    // const config = [{
    //   validation: validator.isEmail(data.email),
    //   key: 'email',
    //   errorMessage: 'Please input a valid Email !',
    // }, {
    //   validation: !!data.email,
    //   key: 'email',
    //   errorMessage: 'Please input your email !',
    // }, {
    //   validation: !!data.password,
    //   key: 'password',
    //   errorMessage: 'Please input your password !',
    // }, {
    //   validation: data.password === data.confirmPassword,
    //   key: 'confirmPassword',
    //   errorMessage: 'Please confirm your password !',
    // }, {
    //   validation: !!data.confirmPassword,
    //   key: 'confirmPassword',
    //   errorMessage: 'Please input your Password !',
    // }];

    // const config = {
    //   email: [{
    //     validation: validator.isEmail(data.email),
    //     errorMessage: 'Please input a valid Email !',
    //   }, {
    //     validation: !!data.email,
    //     errorMessage: 'Please input your email !',
    //   }], 
    //   password: [{
    //     validation: !!data.password,
    //     errorMessage: 'Please input your password !',
    //   }],
    //   confirmPassword: [{
    //     validation: data.password === data.confirmPassword,
    //     errorMessage: 'Please confirm your password !',
    //   }, {
    //     validation: !!data.confirmPassword,
    //     errorMessage: 'Please input your Password !',
    //   }],
    // };

    const error = {};

    Object.keys(FORM).forEach((key) => {
      const { validations } = FORM[key];
      validations.forEach(({ valid, errorMessage }) => {
        const validation = valid(data);
        
        if (validation) {
          return;
        }
  
        error[key] = errorMessage;
      })
      // this.showErrorMessage(key, errorMessage);
    });

    return error;
  }

  // showErrorMessage = (key, errorMessage) => {
  //   this.setState((prevState) => ({
  //     error: {
  //       ...prevState.error,
  //       [key]: errorMessage,
  //     },
  //   }));
  // }

  // hideErrorMessage = (key) => {
  //   this.setState((prevState) => ({
  //     error: {
  //       ...prevState.error,
  //       [key]: false,
  //     },
  //   }));
  // }

  handleFormTouched() {
    this.setState({
      formDirty: true,
    });
  }

  render() {
    const { onClose, onLogin } = this.props;
    const { data, formDirty } = this.state;
  
    const error = this.getError();
    console.log(error);
    console.log(error['email']);

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
              this.getError();

              console.log(data);
            }}
            >
              {Object.keys(FORM).map((key) => {
                const isError = error[key] && formDirty;
                const { label, type } = FORM[key];

                return (
                  <FormItem key={key} label={label}>
                  <Input
                    type={type}
                    onChange={this.handleDataChange(key)}
                    error={isError} 
                  />
                  {isError && (
                    <ErrorMessage>
                      {error[key]}
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