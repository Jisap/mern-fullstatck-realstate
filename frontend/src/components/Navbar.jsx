import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeWork } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to='/'
        className={(isActive) => isActive ? 'active-link flexCenter gap-x-1 rounded-full' : 'flexCenter gap-x-1 rounded-full'}
      >
        <MdHomeWork />
        <div>Home</div>
      </NavLink>
    </nav>
  )
}

export default Navbar