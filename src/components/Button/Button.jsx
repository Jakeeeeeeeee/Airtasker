import styled, { css } from 'styled-components';

const Button = styled.button`
  outline: 0;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 200px;
  font-size: 12px;
  cursor: pointer;

  ${(props) => ({
    sm: css`
      font-size: 12px;
      padding: 8px 14px;
    `,
    md: css`
      padding: 10px 16px;
    `,
  })[props.size || 'md']}

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
    success: css`
      background-color: rgb(125, 179, 67);
      border: 1px solid rgb(125, 179, 67);
      color: white;
    `,
    nacked: css`
      color: inherit;
      border: 0;
      background-color: transparent;
      padding: 0;
      font-size: inherit;
      border-radius: 0;

      &:hover {
        color: gray;
      }
    `,
    link: css`
      color: #008fb4;
      border: 0;
      background-color: transparent;
      padding: 0;
      font-size: inherit;
      border-radius: 0;

      &:hover {
        text-decoration: underline;
      }
    `,
  }[props.variant])}
`;

export default Button;

