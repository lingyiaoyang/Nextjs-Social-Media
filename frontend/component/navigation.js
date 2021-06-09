import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      style={{
        borderBottom: '3px solid black',
        padding: '5px',
      }}
      light
      expand='md'
    >
      <NavbarBrand href='/'>
        <strong style={{ fontSize: '28px' }}>Next-Social-Media</strong>{' '}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href='/about'>About</NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link href='/login'>
                  <p
                    style={{ textDecoration: 'none', backgroundColor: 'white' }}
                  >
                    Log In
                  </p>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href='/register'>
                  <p
                    style={{ textDecoration: 'none', backgroundColor: 'white' }}
                  >
                    Register
                  </p>
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Login out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default navigation;
