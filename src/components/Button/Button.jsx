import styled, { css } from 'styled-components';

const Button = styled.button`
  outline: 0;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 200px;
  font-size: 12px;

  ${(props) => ({
    primary: css`
      border: 1px solid #e0446d;
      background-color: #e0446d;
      color: white;
    `,
    secondary: css`
      color: #008fb4;
      background-color: #f6f8fd;
      border: 1px solid #e1e3e8;
    `,
    nacked: css`
      outline: 0;
      border: 0;
      background: transparent;
      padding: 0;
      font-size: inherit;
      cursor: pointer;

      &:hover {
        color: gray;
      }
    `,
  }[props.variant])}
`;

export default Button;

