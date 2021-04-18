import styled from 'styled-components';
import HeaderItem from '../../../../components/HeaderItem';
import Button from '../../../../components/Button';
import React from 'react';

const Layout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Toggler = styled.div`
  cursor: pointer;
  position: relative;
`;

const DropDown = styled.div`
  position: absolute;
  top: 40px;
  border: 1px solid black;
  width: 150px;
  background-color: white;
  padding: 12px;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownShown: false,
    };

  }

  handleShowDropdown() {
    this.setState({
      isDropdownShown: true,
    });
  }

  handleCloseDropdown() {
    this.setState({
      isDropdownShown: false,
    });
  }

  render() {
    const { isDropdownShown } = this.state;
  return (
    <>
    <Layout>
      <HeaderItem>
        <Button variant='primary'>Post a task</Button>
      </HeaderItem>
      <HeaderItem 
        highlight as={Toggler}
        onMouseEnter={() => this.handleShowDropdown()}
        onMouseLeave={() => this.handleCloseDropdown()}
      >
        Categories
        {isDropdownShown && <DropDown>this is a dropdown</DropDown>}
      </HeaderItem>
      <HeaderItem highlight as={Link} href="/tasks">
        Browse tasks
      </HeaderItem>
      <HeaderItem highlight as={Link} href="/faq">
        How it works
      </HeaderItem>
    </Layout>
    </>
  );
}
}

export default Navigation;