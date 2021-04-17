import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import IHiS from '../../assets/images/ihis-logo.png';
import NTFGH from '../../assets/images/ntfgh-logo.png';
import { googlesheets_url } from '../../constants/url';
import './Navigation.css';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <img className='logo' src={IHiS} alt='ihis-logo' />
        <img className='logo' src={NTFGH} alt='ntfgh-logo' />
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
      </Nav>
      <a
        className='link-revamp'
        href={googlesheets_url}
        target='_blank'
        rel='noreferrer'
      >
        Google Sheets
      </a>
    </Navbar>
  );
};

export default NavigationBar;
