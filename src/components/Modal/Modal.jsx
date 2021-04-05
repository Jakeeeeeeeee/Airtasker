import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';


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

const Footer = styled.div`
  border-top: 1px solid rgb(187, 194, 220);
  margin-top: 24px;
  padding-top: 24px;
`;

const Modal = ({
  onClose,
  header,
  children,
  footer,

}) => (
    <OverLay>
        <Container>
          <CloseButton onClick={onClose} variant="nacked">
            <FontAwesomeIcon size="lg" icon={faTimes} />
          </CloseButton>
          <Header>
            {header}
          </Header>
            {children}
          {footer && (
            <Footer>
                {footer}
            </Footer>
          )}
        </Container>
    </OverLay>
);

export default Modal;