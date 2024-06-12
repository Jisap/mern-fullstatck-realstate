import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      {/* container */}
      <div>
        <div>
          {/* logo */}
          <Link to={'/'} className="flex items-center gap-x-2">
            <span className='font-[900] text-[24px]'>Casa<span className='font-[600] medium-20'>Central</span></span>
          </Link>
        </div>
      </div>
    </header>
}

export default Header