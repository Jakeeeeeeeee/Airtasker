import styled, { css } from 'styled-components';

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  & ~ & {
    margin-left: 16px;
  }

  ${(props) => props.highlight && css`
    &:hover {
      border-top-color: #008fb4;
  }
  `}
`;

export default HeaderItem;