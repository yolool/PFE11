import React from 'react';
import { BsJustify } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import './Header.css';
function Header({ handleToggleSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon' onClick={handleToggleSidebar}>
        <BsJustify className='icon' />
      </div>
      <div>
       <a href="/login"> <button>log out</button></a>
      </div>
    </header>
  );
}
export default Header;
